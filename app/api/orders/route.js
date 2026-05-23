import { supabase } from "@/app/lib/supabase";

export async function POST(request) {
  console.log("=== API: Received order request ===");
  try {
    const orderData = await request.json();
    console.log("Order data received:", orderData);
    
    // Save order to Supabase with pending status
    console.log("Saving to Supabase...");
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert([orderData])
      .select()
      .single();

    if (orderError) {
      console.error("Supabase error:", orderError);
      return Response.json({ error: orderError.message }, { status: 500 });
    }

    console.log("Order saved to Supabase:", order);

    // Initialize Paystack transaction
    const paystackSecret = process.env.PAYSTACK_SECRET_KEY;
    const amount = Math.round(orderData.total * 100); // Convert to kobo
    const callbackUrl = `${request.headers.get("origin")}/checkout/success?order_id=${order.id}`;

    console.log("Initializing Paystack transaction...");
    const paystackResponse = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${paystackSecret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: orderData.email,
          amount: amount,
          reference: `order_${order.id}`,
          callback_url: callbackUrl,
        }),
      },
    );

    const paystackData = await paystackResponse.json();
    console.log("Paystack response:", paystackData);

    if (!paystackData.status) {
      return Response.json({ error: paystackData.message }, { status: 500 });
    }

    return Response.json(
      {
        order,
        paystack: paystackData.data,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// Create webhook endpoint to handle Paystack payment confirmation
export async function PUT(request) {
  try {
    const { order_id } = await request.json();
    console.log("Updating order status to paid:", order_id);

    // Update order status to paid
    const { data, error } = await supabase
      .from("orders")
      .update({ status: "paid" })
      .eq("id", order_id)
      .select()
      .single();

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    console.log("Order updated:", data);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Update error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
