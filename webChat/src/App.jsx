import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

//Add your Client ID here ⬇️
// const clientId = "129461e8-7c8d-4304-aa9b-e824feca3fbd";
const clientId = "d02f7963-67be-4b5c-ace6-0dfc5c630d6a";

const config = {
  composerPlaceholder: "What would you like to know?",
  botName: "Customer service",
  botAvatar: "https://picsum.photos/200/300",
  botDescription:
    "Hi! 👋  Welcome to webchat this is some description talking about what it is. This might be a bit longer when expanded.",
  email: {
    title: "randomEmail@boptress.com",
    link: "mailto:randomEmail@boptress.com",
  },
  phone: {
    title: "555-555-5555",
    link: "tel:555-555-5555",
  },
  website: {
    title: "https://botpress.com",
    link: "https://botpress.com",
  },
  termsOfService: {
    title: "Terms of service",
    link: "https://botpress.com/terms",
  },
  privacyPolicy: {
    title: "Privacy policy",
    link: "https://botpress.com/privacy",
  },
};

export default function App() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div
      style={{
        width: "1280px",
        height: "720px",
        marginLeft: "15%",
      }}
    >
      <style>{style}</style>
      <WebchatProvider theme={theme} configuration={config} client={client}>
        <Fab onClick={toggleWebchat} />
        <div
          style={{
            display: isWebchatOpen ? "block" : "none",
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}
