// const speech = require('@google-cloud/speech');
// // const fs = require('fs');

// // const linear16 = require('linear16');

// // Creates a client
// const client = new speech.SpeechClient();

// async function quickstart() {
//     // The path to the remote LINEAR16 file
//     const gcsUri = 'gs://cloud-samples-data/speech/brooklyn_bridge.raw';
//     // const gcsUri = 'gs://my-bucket/audio.raw';

//     // const filename = 'public/audio.mp3';
//     // const encoding = 'Encoding of the audio file, e.g. LINEAR16';
//     // const sampleRateHertz = 16000;
//     // const languageCode = 'BCP-47 language code, e.g. en-US';

//     // The audio file's encoding, sample rate in hertz, and BCP-47 language code
//     const audio = {
//         uri: gcsUri,
//     };
//     const config = {
//         encoding: 'LINEAR16',
//         sampleRateHertz: 16000,
//         languageCode: 'en-US',
//     };
//     const request = {
//         audio: audio,
//         config: config,
//     };

//     // Detects speech in the audio file
//     const [response] = await client.recognize(request);
//     const transcription = response.results
//         .map(result => result.alternatives[0].transcript)
//         .join('\n');
//     console.log(`THIS IS YOUR TRANSCRIPTION---> ${transcription}`);
// }
// quickstart();
// const fs = require('fs');
// const speech = require('@google-cloud/speech');

// async function syncRecognizeWords() {
//     // [START speech_sync_recognize_words]
//     // Imports the Google Cloud client library
//     // Creates a client
//     const client = new speech.SpeechClient();

//     /**
//      * TODO(developer): Uncomment the following lines before running the sample.
//      */
//     const filename = 'public/audio.mp3';
//     const encoding = 'Encoding of the audio file, e.g. LINEAR16';
//     const sampleRateHertz = 16000;
//     const languageCode = 'BCP-47 language code, e.g. en-US';

//     const config = {
//         enableWordTimeOffsets: true,
//         encoding: encoding,
//         sampleRateHertz: sampleRateHertz,
//         languageCode: languageCode,
//     };
//     const audio = {
//         content: fs.readFileSync(filename).toString('base64'),
//     };

//     const request = {
//         config: config,
//         audio: audio,
//     };

//     // Detects speech in the audio file
//     const [response] = await client.recognize(request);
//     response.results.forEach(result => {
//         console.log('Transcription: ', result.alternatives[0].transcript);
//         result.alternatives[0].words.forEach(wordInfo => {
//             // NOTE: If you have a time offset exceeding 2^32 seconds, use the
//             // wordInfo.{x}Time.seconds.high to calculate seconds.
//             const startSecs =
//                 `${wordInfo.startTime.seconds}` +
//                 '.' +
//                 wordInfo.startTime.nanos / 100000000;
//             const endSecs =
//                 `${wordInfo.endTime.seconds}` +
//                 '.' +
//                 wordInfo.endTime.nanos / 100000000;
//             console.log(`Word: ${wordInfo.word}`);
//             console.log(`\t ${startSecs} secs - ${endSecs} secs`);
//         });
//     });
//     // [END speech_sync_recognize_words]
// }

// syncRecognizeWords()

// Imports the Google Cloud client library
const speech = require('@google-cloud/speech')

// Creates a client
const client = new speech.SpeechClient()

async function quickstart() {
  // The path to the remote LINEAR16 file
  const gcsUri = 'gs://cloud-samples-data/speech/brooklyn_bridge.raw'

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    uri: gcsUri
  }
  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US'
  }
  const request = {
    audio: audio,
    config: config
  }

  // Detects speech in the audio file
  const [response] = await client.recognize(request)
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n')
  console.log(`Transcription: ${transcription}`)
}
quickstart()
