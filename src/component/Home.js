import React from "react";
import { Card} from "react-bootstrap";

export const Home = () => {
  return (
    <div className="home">
      <h2>Wel Come To Home</h2>
      <Card>
        <Card.Img variant="top" src="https://unsplash.com/s/photos/homepage" />
        <Card.Body>
          <Card.Text>
            A home page is the default or front page of a site. It is the first
            page that visitors see when they load a URL. Web managers can
            control the home page as a way of directing the user experience.
             1)
            For a Web user, the home page is the first Web page that is
            displayed after starting a Web browser like Netscape's Navigator or
            Microsoft's Internet Explorer. The browser is usually preset so that
            the home page is the first page of the browser manufacturer.
            However, you can set it to open to any Web site. For example, you
            can specify that "http://www.yahoo.com" or
            "https://www.techtarget.com/whatis/" be your home page. You can also
            specify that there be no home page (a blank space will be displayed)
            in which case you choose the first page from your bookmark list or
            enter a Web address. 2) For a Web site developer, a home page is the
            first page presented when a user selects a site or presence on the
            World Wide Web. The usual address for a Web site is the home page
            address, although you can enter the address (Uniform Resource
            Locator) of any page and have that page sent to you.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            A home page is generally the primary web page which a visitor
            navigating to a website from a search engine will see, and it may
            also serve as a landing page to attract visitors. Thus good home
            page design is usually a high priority for a website.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
    </div>
  );
};
