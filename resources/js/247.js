// Initial execution
NativeBridge.onInitialize(nativeBridgeOnInitializeCallback);

// Functions
function nativeBridgeOnInitializeCallback(obj) {
    NativeBridge.setMessage("Hello there");
}
