const quotes = [
  {
    quote: "The only thing that limits what we can achieve tomorrow is our doubts and fears today. Believe in your potential and the future becomes limitless.",
    author: "Franklin D. Roosevelt",
    hindi: "हम जो कल हासिल कर सकते हैं, उसे आज की हमारी शंकाएँ और डर सीमित करते हैं। खुद पर भरोसा रखें, भविष्य की संभावनाएँ असीमित हो जाएंगी।"
  },
  {
    quote: "If you have faith in yourself and your abilities, you're already halfway through the journey. Belief is the foundation that makes impossible things possible.",
    author: "Theodore Roosevelt",
    hindi: "यदि आपको खुद पर और अपनी क्षमताओं पर विश्वास है, तो आप पहले ही आधा रास्ता तय कर चुके हैं। विश्वास असंभव को भी संभव बना देता है।"
  },
  {
    quote: "Success is not the final destination and failure is not the end. It is the strength to keep moving forward that truly defines your journey.",
    author: "Winston Churchill",
    hindi: "सफलता अंतिम पड़ाव नहीं और असफलता अंत नहीं होती। आगे बढ़ते रहने की ताकत ही आपकी असली यात्रा को परिभाषित करती है।"
  },
  {
    quote: "Don't waste time watching the clock. Do what time does—keep moving forward without stopping. Consistency and action will take you far.",
    author: "Sam Levenson",
    hindi: "घड़ी को मत देखो, उसकी तरह बनो—लगातार आगे बढ़ते रहो। निरंतरता और क्रियाशीलता ही आपको सफलता तक ले जाएंगी।"
  },
  {
    quote: "There is no age limit to chasing your dreams or setting new goals. Every day brings a new opportunity to begin again with courage.",
    author: "C.S. Lewis",
    hindi: "सपने देखने या नए लक्ष्य तय करने की कोई उम्र नहीं होती। हर दिन नई शुरुआत करने का एक सुनहरा अवसर लाता है।"
  },
  {
    quote: "The greatest challenges in life often shape ordinary individuals into people with extraordinary purpose and strength to transform the world around them.",
    author: "C.S. Lewis",
    hindi: "जीवन की सबसे बड़ी चुनौतियाँ अक्सर साधारण लोगों को असाधारण उद्देश्य और ताकत के साथ बदल देती हैं। वे दुनिया को नया रूप देते हैं।"
  },
  {
    quote: "Behave as though every little thing you do has real power—because it does. Your actions, even small, have the potential to change lives.",
    author: "William James",
    hindi: "ऐसा व्यवहार करें जैसे आपके हर छोटे कार्य में शक्ति हो—क्योंकि वास्तव में है। आपके छोटे कदम भी जीवन बदल सकते हैं।"
  },
  {
    quote: "Many things seem impossible in the beginning, but once you start and keep going, you’ll realize nothing is out of reach if you’re determined.",
    author: "Nelson Mandela",
    hindi: "शुरुआत में बहुत कुछ असंभव लगता है, लेकिन एक बार आप प्रयास करना शुरू करें, तो कोई भी लक्ष्य दूर नहीं होता।"
  },
  {
    quote: "Start with whatever you have, from wherever you are, and do your best. You don’t need perfection, just a strong beginning and persistence.",
    author: "Arthur Ashe",
    hindi: "जहाँ हैं वहीं से शुरू करें, जो पास है उसका उपयोग करें और अपना सर्वश्रेष्ठ दें। शुरुआत और निरंतर प्रयास ही काफी है।"
  },
  {
    quote: "Don’t let your current challenges define your limits. Instead, break boundaries by challenging what you believe you can’t do—and discover your true strength.",
    author: "Jerry Dunn",
    hindi: "अपनी चुनौतियों को अपनी सीमाएँ मत बनने दो। जो असंभव लगता है, उसे चुनौती दो और अपनी असली ताकत को पहचानो।"
  },
  {
    quote: "Every action you take today shapes your future. Use your time wisely and you’ll build a tomorrow that aligns with your dreams and values.",
    author: "Mahatma Gandhi",
    hindi: "आपका आज का हर कार्य आपके भविष्य को आकार देता है। समय का सदुपयोग करें और अपने सपनों से मेल खाता कल बनाएं।"
  },
  {
    quote: "Your biggest dreams and desires lie just beyond your fears. Overcome them, and you unlock a world of possibilities you never imagined existed.",
    author: "George Addair",
    hindi: "आपकी सबसे बड़ी इच्छाएँ और सपने डर के उस पार हैं। जैसे ही आप डर को हराते हैं, नई संभावनाओं का द्वार खुलता है।"
  },
  {
    quote: "You are responsible for your progress. No one else will push you as hard as you can push yourself. Be your own motivator and strength.",
    author: "Unknown",
    hindi: "आपकी प्रगति की ज़िम्मेदारी आपकी है। जैसा आप खुद को प्रेरित कर सकते हैं, कोई और नहीं कर सकता। खुद की ताकत बनो।"
  },
  {
    quote: "Those who remain deeply focused on their work and progress often achieve success before they even realize it. Stay consistent and results will follow.",
    author: "Henry David Thoreau",
    hindi: "जो लोग अपने काम में पूरी तरह लगे रहते हैं, उन्हें सफलता अनजाने में मिल जाती है। निरंतर प्रयास ही परिणाम लाता है।"
  },
  {
    quote: "Think big and don’t fear falling short. Failure is a teacher, and only those who dare to dream big can reach the highest goals.",
    author: "Norman Vaughan",
    hindi: "बड़ा सोचो और असफलता से मत डरो। असफलता सिखाती है, और जो बड़े सपने देखते हैं वही ऊँचाई तक पहुँचते हैं।"
  },
  {
    quote: "Put your energy into the work, not into showing off. Let your achievements speak louder than your words—true success shines quietly.",
    author: "Frank Ocean",
    hindi: "अपना ध्यान काम में लगाओ, दिखावे में नहीं। आपकी उपलब्धियाँ खुद बोलेंगी—सच्ची सफलता शांत होती है।"
  },
  {
    quote: "You won’t grow until you step out of your comfort zone. Real progress begins when you take risks and embrace discomfort as growth.",
    author: "Neil Strauss",
    hindi: "जब तक आप अपने आराम क्षेत्र से बाहर नहीं निकलते, तब तक विकास नहीं होता। असहजता को ही बदलाव का आधार मानें।"
  },
  {
    quote: "Your time here is limited—don’t waste it living someone else’s dreams or opinions. Live truly and authentically according to your own vision.",
    author: "Steve Jobs",
    hindi: "आपका समय सीमित है—इसे दूसरों के सपनों या राय के अनुसार जीने में मत गंवाओ। खुद के अनुसार जियो।"
  },
  {
    quote: "Opportunities don’t come knocking—they are made through hard work, ideas, and courage. Build your own doors and invite success to enter.",
    author: "Chris Grosser",
    hindi: "अवसर अपने आप नहीं आते, उन्हें मेहनत, विचार और साहस से बनाना पड़ता है। खुद दरवाज़ा बनाओ और सफलता को आमंत्रित करो।"
  },
  {
    quote: "If you want to reach greatness, stop waiting for someone’s approval. Take charge, believe in yourself, and carve your own path forward.",
    author: "Anonymous",
    hindi: "अगर आप महान बनना चाहते हैं तो दूसरों की अनुमति का इंतजार बंद करें। खुद पर विश्वास रखें और अपनी राह खुद बनाएं।"
  }
];


  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selected = quotes[randomIndex];
    document.getElementById("quote").innerText = `${selected.quote}`;
    document.getElementById("hindi").innerText = `${selected.hindi}`;
    document.getElementById("author").innerText = `${selected.author}`;
  }

  // Show first quote on load
  showRandomQuote();

  function Tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + document.getElementById("quote").innerText + " ---- by " +  document.getElementById("author").innerText, "Tweet Window", "width=600, height=300");
  }