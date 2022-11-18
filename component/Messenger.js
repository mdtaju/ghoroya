import React from 'react';
import { MessengerChat } from 'react-messenger-chat-plugin';


const Messenger = () => {

      return (
            <div>
                  {
                        typeof window !== undefined &&
                        <>
                              <MessengerChat
                                    pageId="110011054741990"
                                    appId="2683194561811723"
                                    language="en_US"
                                    themeColor={"#000000"}
                                    bottomSpacing={300}
                                    loggedInGreeting="loggedInGreeting"
                                    loggedOutGreeting="loggedOutGreeting"
                                    greetingDialogDisplay={"show"}
                                    debugMode={true}
                              // onMessengerShow={() => {
                              //       console.log("onMessengerShow");
                              // }}
                              // onMessengerHide={() => {
                              //       console.log("onMessengerHide");
                              // }}
                              // onMessengerDialogShow={() => {
                              //       console.log("onMessengerDialogShow");
                              // }}
                              // onMessengerDialogHide={() => {
                              //       console.log("onMessengerDialogHide");
                              // }}
                              // onMessengerMounted={() => {
                              //       console.log("onMessengerMounted");
                              // }}
                              // onMessengerLoad={() => {
                              //       console.log("onMessengerLoad");
                              // }}
                              />
                              {/* <div id="fb-root"></div>

                              <div id="fb-customer-chat"
                                    className="fb-customerchat"
                              ></div>
                              <Script strategy="lazyOnload">
                                    {`
                              var chatbox = document.getElementById('fb-customer-chat');
                              chatbox.setAttribute("page_id", "100072578250427");
                              chatbox.setAttribute("attribution", "biz_inbox");

                              window.fbAsyncInit = function() {
                              FB.init({
                              xfbml            : true,
                              version          : 'v12.0'
                              });
                              };

                              (function(d, s, id) {
                              var js, fjs = d.getElementsByTagName(s)[0];
                              if (d.getElementById(id)) return;
                              js = d.createElement(s); js.id = id;
                              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                              fjs.parentNode.insertBefore(js, fjs);
                              }(document, 'script', 'facebook-jssdk'));
                              `}
                              </Script> */}
                        </>
                  }
            </div>
      );
};

export default Messenger;