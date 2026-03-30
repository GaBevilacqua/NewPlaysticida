export default function AlertBox({ title, message, onConfirm }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div className="bg-green-600 shadow-2xl rounded-2xl p-6 max-w-md w-full mx-4">
        <h2 className="text-lg font-semibold mb-2 text-white">
          ⚠️ {title}
        </h2>
        <hr className="border-gray-300 mb-4" />

        <p className="text-white mb-6 font-bold">
          {message}
        </p>

        <div className="flex justify-end">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition font-medium"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}