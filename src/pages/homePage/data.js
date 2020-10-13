import heroImage from "../../assets/illustration-mockups.svg";
import featureOne from "../../assets/illustration-grow-together.svg";
import featureTow from "../../assets/illustration-flowing-conversation.svg";
import featureThree from "../../assets/illustration-your-users.svg";

export const data = {
  hero: {
    title: "Build The Community Your Fans Will Love",
    content:
      "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.",
    buttonText: "Get Started For Free",
    imageURL: heroImage,
  },
  features: [
    {
      title: "Grow Together",
      content:
        "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
      imageURL: featureOne,
      imageALT: "illustration",
    },

    {
      title: "Flowing Conversations",
      content:
        "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      imageURL: featureTow,
      imageALT: "illustration",
    },
    {
      title: "Your Users",
      content:
        "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      imageURL: featureThree,
      imageALT: "illustration",
    },
  ],
  cta: {
    title: "Reday to Build Your Community",
    buttonText: "Get Started For Free",
  },
};
