# OuterView

_Get your OuterView before your next Interview_

## Visit

[OuterView.xyz](https://www.outerview.xyz/)

## Features to Try!

- Use Google to sign into our app using you existing google account
- Record yourself talking and see a live transcription
- Render Face Points and make some funny faces
- Emotions trained into machine learning model
  - Happy, Sad, Surprised, Anger, Fearful, Neutral, Neutral/Normal
- Say lots of filler words such as 'like', 'totally' and 'basically'
- Try different emotions with varying amounts of filler words to see the scoring algorith work
- See all your recordings in the All Recordings page

## Technologies

- Front-End
  - React.js, React Hooks, Bootstrap UI, RumbleCharts, Google Authentication
- Back-End
  - Google Firestore: NoSQL Database for user and session records
  - Google Cloud Storage: Cloud Storage for all videos and images
- External API/Libraries
  - [Face-API.js](https://github.com/justadudewhohacks/face-api.js/): Tensorflow wrapper for facial recognition and emotion detection
  - [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API): Browser based speech recognition and analysis
- Deployment
  - Google Firebase Hosting: Public URL pointing and hosting on outerview.xyz
  - Mocha/Chai: Unit testing of modules for faster developement
  - Travis: Continuous Integration and Deployment

## Future Roadmap

- Utilize Google Cloud AI for sentiment analysis of responses
- Combine facial emotions with Google AI sentiment of speech for an even more robust analysis
- Phrase filler word detection ('sort of', 'you know', etc)
- Utilize WebRTC to practive interviewing skills live with a partner or instructor

## Authors

[Kush Patel](https://www.linkedin.com/in/kushpatel21/) - [Charles Lucas](https://www.linkedin.com/in/charleslucas1/) - [Michael Busto](https://www.linkedin.com/in/michael-busto/) - [Benny Khoker](https://www.linkedin.com/in/benny-khoker/)

## Installation

- To install all dependencies: `npm run install`
- To Run App!: `npm run start-dev`
- Or just visit [OuterView.xyz](https://www.outerview.xyz/)
