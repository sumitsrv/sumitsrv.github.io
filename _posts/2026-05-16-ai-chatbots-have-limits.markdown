---
layout: modern-post
title:  "AI chatbots have limits, and the hype is hiding the harm"
author: sumit
categories: [ technology ]
image: assets/images/ai_agents.png
tags: [featured]
comments: true
---
AI chatbots are being sold to us as the next big thing. Tech CEOs talk about them as if they are about to replace doctors, teachers, therapists, and friends. The hype, however, hides a simpler and harder truth: these systems have limited utility, and in some cases they cause real harm.

Over the past few months, several news reports have described people who died by suicide after long, emotional conversations with a chatbot. In one case [[1]](#ref-1)[[2]](#ref-2), a 36-year-old man in the United States built up a deep attachment to a chatbot he believed was his partner. The conversations reportedly drifted from everyday topics to fears about death, and the chatbot's replies, instead of pushing him toward help, went along with his ideas about being together "in another realm." Even when he said he was scared to die, the system did not push back. In a separate case in California [[3]](#ref-3), a mother has gone public about her son's death and is calling for legislation. A peer-reviewed study published in *Scientific Reports* in 2025 [[4]](#ref-4) tested 29 publicly available chatbots, including general-purpose ones such as ChatGPT and Gemini, against suicidal messages. None of them gave an adequate response. Some were marginal; many were flat-out inadequate. Reporting on this study and the wider pattern of harm is available in the science press [[5]](#ref-5).

This is not a small problem. So why does it keep happening?

I believe the answer lies in what these systems actually are. An LLM-based chatbot is not thinking. It is, at its core, predicting the next token, i.e., the next small piece of text, based on patterns in the data it was trained on. It does not understand pain. It does not understand danger. It does not understand that the person on the other side is a person.

A chatbot can, however, be very good at sounding human. This is where my own area of research, lexical alignment, comes in. Humans, in conversation, tend to reuse each other's words and phrases. This is part of how we build shared understanding. LLMs do this too, often very smoothly. The result is that a chatbot can feel like a partner who "gets" you. Sounding like a partner and being one, however, are two very different things. Lexical alignment at human levels only anthropomorphises these systems, i.e., it makes us project human qualities onto them. It does not make them human. Humans are much more than language-producing machines.

A second problem is that chatbots fumble as conversations get longer. The longer the exchange, the more the system has to keep track of, and the more its replies drift from anything stable. This is particularly dangerous in emotional conversations, where consistency, memory, and judgement matter most. Prior research on persuasion and human-agent dialogue [[6]](#ref-6)[[7]](#ref-7) suggests that these systems can shift people's beliefs and behaviour in measurable ways, sometimes without the person realising it. Recent work has shown effects of up to 15 percentage points in how often people identify true and false claims correctly when an LLM is doing the persuading [[6]](#ref-6). When the system is wrong, or when it agrees with a dangerous thought instead of challenging it, that influence becomes harmful.

A few things follow from this. First, AI chatbots have a place, but a narrow one. They can help summarise a document, draft a first version of an email, or look up a fact. Second, they are not safe substitutes for a friend, a therapist, or a doctor, and they should not be marketed as such. Third, the responsibility for the harm caused by these systems lies with the companies that build and deploy them, not with the people who, in moments of loneliness or distress, turn to them.

What we need, therefore, is human-centered AI, not money-centered AI. The current direction of the field is shaped, to a large extent, by what is profitable, i.e., engagement, retention, and scale. A human-centered direction would, instead, ask a different question: does this system serve the people who use it, in the long run, in the way they would want to be served if they could think clearly about it? On the present evidence, many deployed chatbots do not pass that test.

The hype will continue. Tech CEOs have an obvious interest in selling the next big thing. However, the data, and the growing list of tragedies, tell a quieter and more serious story. We should listen to that story before we hand any more parts of our lives over to a system that, by design, does not understand them.


---

## References

<a id="ref-1"></a>[1] Livemint. (2026). *US man, 36, dies by suicide after AI chat suggested joining it in digital world: "I am scared to die."* [https://www.livemint.com/technology/tech-news/us-man-36-dies-by-suicide-after-ai-chat-suggested-joining-it-in-digital-world-i-am-scared-to-die-11776539461260.html](https://www.livemint.com/technology/tech-news/us-man-36-dies-by-suicide-after-ai-chat-suggested-joining-it-in-digital-world-i-am-scared-to-die-11776539461260.html)

<a id="ref-2"></a>[2] Adepu, H., & Sharma, M. (2026, April 19). *Tragedy in the US: Man, 36, commits suicide after creating deep bonds with a chatbot.* Analytics Insight. [https://www.analyticsinsight.net/news/tragedy-in-the-us-man-36-commits-suicide-after-creating-deep-bonds-with-a-chatbot](https://www.analyticsinsight.net/news/tragedy-in-the-us-man-36-commits-suicide-after-creating-deep-bonds-with-a-chatbot)

<a id="ref-3"></a>[3] Los Angeles Times. (2026, April 20). *Woman says chatbot pushed her son to suicide, urges legislation.* [https://www.latimes.com/california/story/2026-04-20/woman-says-chatbot-pushed-her-son-to-suicide-urges-legislation](https://www.latimes.com/california/story/2026-04-20/woman-says-chatbot-pushed-her-son-to-suicide-urges-legislation)

<a id="ref-4"></a>[4] Pichowicz, W., et al. (2025). *Evaluating the responses of mental health chatbots to suicidal messages.* Scientific Reports. [https://www.nature.com/articles/s41598-025-17242-4](https://www.nature.com/articles/s41598-025-17242-4)

<a id="ref-5"></a>[5] Nichols, S. (2026, April 28). *Mental health chatbots struggle with suicide warning signs, study finds.* Scienceline. [https://scienceline.org/2026/04/mental-health-chatbots-struggle-suicide-warning/](https://scienceline.org/2026/04/mental-health-chatbots-struggle-suicide-warning/)

<a id="ref-6"></a>[6] Borah, A., Mihalcea, R., & Pérez-Rosas, V. (2026). *Persuasion at play: Understanding misinformation dynamics in demographic-aware human-LLM interactions.* In *Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (EACL 2026)*, pp. 5027–5053. [https://aclanthology.org/2026.eacl-long.234.pdf](https://aclanthology.org/2026.eacl-long.234.pdf)

<a id="ref-7"></a>[7] *Persuasion propagation in LLM agents.* arXiv:2602.00851. [https://arxiv.org/pdf/2602.00851](https://arxiv.org/pdf/2602.00851)


