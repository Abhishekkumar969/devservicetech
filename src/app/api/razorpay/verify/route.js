import { NextResponse } from "next/server";
import crypto from "crypto";
// Note: We use firebase-admin or the client SDK if this is serverless.
// For simplicity in this demo, we'll assume the client writes the order, 
// OR we initialize firebase-admin here to write to Firestore securely.
// Since we don't have firebase-admin installed yet, we'll use a placeholder success response
// In production, you MUST verify the signature and write the "paid" status to the DB securely here.

export async function POST(request) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, items } = body;

    const key_secret = process.env.RAZORPAY_KEY_SECRET || "test_secret";

    const generated_signature = crypto
      .createHmac("sha256", key_secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      // Payment is successful and verified
      // TODO: Connect to Firebase Admin to securely save the order to 'orders' collection
      // Mocking success response for now:
      return NextResponse.json({ success: true, message: "Payment verified successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 400 });
    }
  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json({ success: false, error: "Verification failed" }, { status: 500 });
  }
}
