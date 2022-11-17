import React from 'react';
import { MessengerChat } from "react-messenger-chat-plugin";

const Messenger = () => {
      return (
            <div>
                  <MessengerChat
                        pageId="100072578250427"
                        language="en_US"
                        themeColor={"#000000"}
                        bottomSpacing={300}
                        loggedInGreeting="loggedInGreeting"
                        loggedOutGreeting="loggedOutGreeting"
                        greetingDialogDisplay={"show"}
                        debugMode={true}
                        onMessengerShow={() => {
                              console.log("onMessengerShow");
                        }}
                        onMessengerHide={() => {
                              console.log("onMessengerHide");
                        }}
                        onMessengerDialogShow={() => {
                              console.log("onMessengerDialogShow");
                        }}
                        onMessengerDialogHide={() => {
                              console.log("onMessengerDialogHide");
                        }}
                        onMessengerMounted={() => {
                              console.log("onMessengerMounted");
                        }}
                        onMessengerLoad={() => {
                              console.log("onMessengerLoad");
                        }}
                  />
            </div>
      );
};

export default Messenger;