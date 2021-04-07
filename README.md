# OuterView

_Get your OuterView before your next Interview_

## Visit

[OuterView.xyz](https://www.outerview.xyz/)

[![](https://firebasestorage.googleapis.com/v0/b/interviewprep-fsa.appspot.com/o/static%2Fembed.png?alt=media&token=ef6f5d54-f646-4e2a-8d62-d3854fdc2bb4)](https://www.youtube.com/watch?v=4bs31n8uNF0 'OuterView')

## Features to Try!

- Sign into OuterView with your Google account
- Record yourself talking and see a live transcription
- Render Face Points and make some funny faces
- Emotions trained into machine learning model
  - _Happy, Sad, Surprised, Anger, Fearful, Disgusted, Neutral_
- Say lots of filler words such as 'like', 'totally' and 'basically'
- Try different emotions with varying amounts of filler words to see the scoring algorithm work
- See your previous recordings in the All Recordings page

## Technologies

- Front-End
  - React.js, React Hooks, Bootstrap UI, Rumble Charts
- Back-End
  - Google Firestore: NoSQL Database for user and session records
  - Google Cloud Storage: Cloud Storage for all videos and images
  - Google Authentication: Allowing users to securely sign in with existing accoutns
- External API/Libraries
  - [Face-API.js](https://github.com/justadudewhohacks/face-api.js/): Tensorflow wrapper for facial recognition and emotion detection
  - [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API): Browser based speech recognition and analysis
- Deployment
  - Google Firebase Hosting: Public URL pointing and hosting on OuterView.xyz
  - Travis: Continuous Integration and Deployment

## Future Roadmap

- Utilize WebRTC to practice interviewing skills live with another OuterView user
- Google Cloud AI sentiment analysis for a deeper and richer look
- Phrase fillerword detection ('sort of', 'you know', etc)
- Eye Contact and Posture tracking and scoring

## Authors

[Kush Patel](https://www.linkedin.com/in/kushpatel21/) - [Charles Lucas](https://www.linkedin.com/in/charleslucas1/) - [Michael Busto](https://www.linkedin.com/in/michael-busto/) - [Benny Khoker](https://www.linkedin.com/in/benny-khoker/)

## Installation

- To install all dependencies: `npm run install`
- To Run App!: `npm run start-dev`
- Or just visit [OuterView.xyz](https://www.outerview.xyz/)
