// // creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What best describes your child’s behavior when you read them a book?",
    answerA: "A: They like to snuggle deep into your lap and have your arms wrap around them",
    answerB: "B: They point out interesting pictures (or words, if they can read)",
    answerC: "C: They repeat words they hear you say",
    options: [
      "A: They like to snuggle deep into your lap and have your arms wrap around them",
      "B: They point out interesting pictures (or words, if they can read)",
      "C: They repeat words they hear you say"
    ]
  },
    {
    numb: 2,
    question: "How does your child act when you go for a walk?",
    answerA: "A: They want to hold your hand, tugging you around",
    answerB: "B: Their head turns this way and that, trying to see everything at once",
    answerC: "C: They ask questions about everything and want you to answer them all",
    options: [
      "A: They want to hold your hand, tugging you around",
      "B: Their head turns this way and that, trying to see everything at once",
      "C: They ask questions about everything and want you to answer them all"
    ]
  },
    {
    numb: 3,
    question: "When your child wants to go on a little adventure, where do they want to go?",
    answerA: "A: Go to a trampoline park",
    answerB: "B: Visit the zoo so they can see the animals",
    answerC: "C: Go to the movies in surround sound",
    options: [
      "A: Go to a trampoline park",
      "B: Visit the zoo so they can see the animals",
      "C: Go to the movies in surround sound"
    ]
  },
    {
    numb: 4,
    question: "If you were to take your child on a hike, what would be their favorite part?",
    answerA: "A: Racing you to the next rock, climbing over little rivers, or catching bugs",
    answerB: "B: Seeing the view at the top",
    answerC: "C: Hearing all the birds calling to each other",
    options: [
      "A: Racing you to the next rock, climbing over little rivers, or catching bugs",
      "B: Seeing the view at the top",
      "C: Hearing all the birds calling to each other"
    ]
  },
    {
    numb: 5,
    question: "Around the house, what’s your child’s least favorite chore?",
    answerA: "A: Doing homework",
    answerB: "B: Vacuuming",
    answerC: "C: Doing the dishes",
    options: [
      "A: Doing homework",
      "B: Vacuuming",
      "C: Doing the dishes"
    ]
  },
    {
    numb: 6,
    question: "What’s your child’s favorite part of their birthday?",
    answerA: "A: Running around and playing games with other kids",
    answerB: "B: Seeing all their presents & opening them",
    answerC: "C: Having everyone sing them “Happy Birthday",
    options: [
      "A: Running around and playing games with other kids",
      "B: Seeing all their presents & opening them",
      "C: Having everyone sing them “Happy Birthday",
    ]
  },
  {
    numb: 7,
    question: "What scares your child most?",
    answerA: "A: Getting boo-boos",
    answerB: "B: The dark",
    answerC: "C: Loud noises",
    options: [
      "A: Getting boo-boos",
      "B: The dark",
      "C: Loud noises",
    ]
  },{
    numb: 8,
    question: "If you really need to persuade your child to do a task (get dressed, walk to the car, etc), what’s most likely to work?",
    answerA: "A: Turning the task into a race",
    answerB: "B: Vacuuming",
    answerC: "C: Doing the dishes",
    options: [
      "A: Turning the task into a race",
      "B: The promise of screen time afterwards",
      "C: Singing while you do it together",
    ]
  },
  {
    numb: 9,
    question: "What kind of toy would your child get most excited about?",
    answerA: "A: A new slide, bike, or mini trampoline",
    answerB: "B: A hand-held video game",
    answerC: "C: Their own headphones ",
    options: [
      "A: A new slide, bike, or mini trampoline",
      "B: A hand-held video game",
      "C: Their own headphones ",
    ]
  },
  {
    numb: 10,
    question: "What makes your child the most frustrated?",
    answerA: "A: Being stuck in the car",
    answerB: "B: Being told *no more screens*",
    answerC: "C: When you keep telling them to quiet down",
    options: [
      "A: Being stuck in the car",
      "B: Being told *no more screens*",
      "C: When you keep telling them to quiet down",
    ]
  },
  {
    numb: 11,
    question: "Which of the following compliments would really make them light up?",
    answerA: "A: Wow, you’re a great climber!",
    answerB: "B: You look very pretty/handsome/dashing today.",
    answerC: "C: You can sing so well!",
    options: [
      "A: Wow, you’re a great climber!",
      "B: You look very pretty/handsome/dashing today.",
      "C: You can sing so well!",
    ]
  },
  {
    numb: 12,
    question: "If you gave your child $10, what kind of food would they want to spend it on?",
    answerA: "A: Sour candy, spicy curry, or salty chips",
    answerB: "B: Something unusual-looking, like dragon fruit or horned melon",
    answerC: "C: Squeaky cheese, crunchy nachos, or make-it-yourself popcorn",
    options: [
      "A: Sour candy, spicy curry, or salty chips",
      "B: Something unusual-looking, like dragon fruit or horned melon",
      "C: Squeaky cheese, crunchy nachos, or make-it-yourself popcorn",
    ]
  },
  {
    numb: 13,
    question: "What’s your child’s favorite thing about sports?",
    answerA: "A: Playing them!",
    answerB: "B: Watching games on TV",
    answerC: "C: You can sing so well!",
    options: [
      "A: Playing them!",
      "B: Watching games on TV",
      "C: Being in the crowd and cheering for their favorite team",
    ]
  },
  {
    numb: 14,
    question: "When your child goes to the doctor, what part would they actually be OK with?",
    answerA: "A: Using the doctor’s instruments",
    answerB: "B: Getting a sticker at the end",
    answerC: "C: You can sing so well!",
    options: [
      "A: Using the doctor’s instruments",
      "B: Getting a sticker at the end",
      "C: The doctor explaining how their body works",
    ]
  },
  {
    numb: 15,
    question: "How does your child usually behave at the dinner table?",
    answerA: "A: They eat a lot, sometimes spill things, and frequently get up to move around",
    answerB: "B: They play with their food: mashed potatoes become mountains, all the peas migrate to one end of the plate, etc.",
    answerC: "C: Participating in conversations about everyone’s day, and sometimes complaining about other people’s chewing noises.",
    options: [
      "A: They eat a lot, sometimes spill things, and frequently get up to move around",
      "B: They play with their food: mashed potatoes become mountains, all the peas migrate to one end of the plate, etc.",
      "C: Participating in conversations about everyone’s day, and sometimes complaining about other people’s chewing noises.",
    ]
  },{
    numb: 16,
    question: "When your child was a baby, what was their favorite game?",
    answerA: "A: Patty Cake",
    answerB: "B: Peek-a-boo",
    answerC: "C: You can sing so well!",
    options: [
      "A: Patty Cake",
      "B: Peek-a-boo",
      "C: Singing nursery songs",
    ]
  },{
    numb: 17,
    question: "What’s your child’s preferred way of spending time with friends?",
    answerA: "A: Playing tag, climbing on jungle gyms, or doing sports",
    answerB: "B: Doing arts & crafts, playing with legos/blocks, or video games",
    answerC: "C: Talking, playing instruments, or listening to podcasts/music",
    options: [
      "A: Playing tag, climbing on jungle gyms, or doing sports",
      "B: Doing arts & crafts, playing with legos/blocks, or video games",
      "C: Talking, playing instruments, or listening to podcasts/music",
    ]
  },{
    numb: 18,
    question: "What’s your child’s greatest strength?",
    answerA: "A: They’re strong, fast, and/or very dexterous",
    answerB: "B: They have amazing",
    answerC: "C: They’re so perceptive. You can’t have adult conversations around them anymore without them picking up on everything!",
    options: [
      "A: They’re strong, fast, and/or very dexterous",
      "B: They have amazing",
      "C: They’re so perceptive. You can’t have adult conversations around them anymore without them picking up on everything!",
    ]
  },{
    numb: 19,
    question: "What’s your child’s favorite part of school?",
    answerA: "A: Hands-on science experiments or gym",
    answerB: "B: Art class or math",
    answerC: "C: Read-alouds or music",
    options: [
      "A: Hands-on science experiments or gym",
      "B: Art class or math",
      "C: Read-alouds or music",
    ]
  },{
    numb: 20,
    question: "How do you calm your child down when they’re upset?",
    answerA: "A: Stroke their hair, rub their back, or just cuddle them",
    answerB: "B: Look them in the eye and get them to look back at you",
    answerC: "C: Tell them it’ll be okay, and how you know that",
    options: [
      "A: Stroke their hair, rub their back, or just cuddle them",
      "B: Look them in the eye and get them to look back at you",
      "C: Tell them it’ll be okay, and how you know that",
    ]
  },
];
