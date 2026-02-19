import { clear } from "console";

const Modal = ({ isOpen, onClose, cart, clearCart }: any) => {
    const buildWhatsAppMessage = (cart: any[]) => {
      if (cart.length === 0) return "Hi, I would like to place an order.";

      let message = "Hi, I would like to place an order:\n";
      cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} x${item.qty} - ₦${item.price * item.qty}\n`;
      });

      const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      message += `Total: ₦${total}`;

      return encodeURIComponent(message);
    };
const handleCheckout = () => {
  const whatsappMessage = buildWhatsAppMessage(cart);
  const whatsappLink = `https://wa.me/2348130935623?text=${whatsappMessage}`;
  window.open(whatsappLink, "_blank");
  clearCart();
  // const confirmClear = window.confirm(
  //   "After sending the message on WhatsApp, click OK to clear your cart.",
  // );
  // if (confirmClear) {
  //   clearCart();
  //  sessionStorage.removeItem("cart");
  //  window.location.reload();
  // }

}
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] max-w-md bg-white z-50 shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-140px)]">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty
            </p>
          ) : (
            cart.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                </div>

                <p className="font-semibold">₦{item.price * item.qty}</p>
              </div>
            ))
          )}
          <div className="w-full flex items-center justify-between mt-4 pt-4 ">
            <p className="text-right font-bold text-black text-lg px-4">
              Total:
            </p>
            <p className="text-right font-bold text-black text-lg px-4">
              Total: ₦
              {cart.reduce(
                (sum: number, item: any) => sum + item.price * item.qty,
                0,
              )}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 border-t bg-white">
          <button onClick={handleCheckout}
            className="w-full bg-black text-white py-3 rounded-xl
            hover:bg-gray-800 transition"
          >

              Send Order via WhatsApp

          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
