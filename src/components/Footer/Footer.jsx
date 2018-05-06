import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks, LocalTitle } = this.props;
    const showRSS = LocalTitle === "Blog";
    const copyright = config.copyright;
    const fixedFooter = config.fixedFooter;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        <div className="notice-container">
          <div className="copyright">
            <h4>{copyright}</h4>
          </div>

          {showRSS &&
            <div className="rss">
              <Link to={url}>
                <Button flat secondary iconClassName="fa fa-rss">
                  Subscribe
                </Button>
              </Link>
            </div>
          }

          <div className="based-on">
            <h4>
              All Rights Reserved.
            </h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
