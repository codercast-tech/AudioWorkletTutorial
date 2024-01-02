// Extiende la clase MyAudioProcessor de AudioWorkletProcessor.
// AudioWorkletProcessor es la base para procesar audio en un Audio Worklet.
class MyAudioProcessor extends AudioWorkletProcessor {

    // El método process se llama en cada bloque de audio para el procesamiento.
    process(inputs, outputs, parameters) {
        // Obtiene el primer (y posiblemente único) conjunto de entradas y salidas.
        const input = inputs[0];
        const output = outputs[0];

        // Asumiendo audio mono (un solo canal).
        // Verifica si hay datos de entrada y salida disponibles.
        if (input && output && input.length > 0 && output.length > 0) {
            // Obtiene el primer canal de la entrada y la salida.
            const inputChannel = input[0];
            const outputChannel = output[0];

            // Copia las muestras del canal de entrada al canal de salida.
            // Este bucle pasa el audio directamente sin modificarlo.
            for (let i = 0; i < inputChannel.length; i++) {
                outputChannel[i] = inputChannel[i];
            }
        }

        // Devuelve true para mantener vivo el procesador.
        // Si devolviera false, el procesador se detendría.
        return true;
    }
}

// Registra el procesador de audio con un nombre específico.
// "my-audio-processor" es el nombre que se usará para instanciar este procesador desde el hilo principal.
registerProcessor("my-audio-processor", MyAudioProcessor);
