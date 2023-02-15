import React from "react";

const TopHeader = () => {
  return (
    <div id="top">
				<div className="container">
					<p className="pull-left text-note"><i className="fa fa-phone"></i> Customer Support: +080 123 456 789</p>
					<ul className="nav nav-pills nav-top navbar-right">
						<li className="dropdown langs">
							<a href="index-4.html#" className="dropdown-toggle" data-toggle="dropdown"><img src="images/flags/en.gif" alt="English" /> <span className="caret"></span></a>
							<ul className="dropdown-menu" role="menu">
								<li><a href="index-4.html#"><img src="images/flags/ar.gif" alt="AR" /></a></li>
								<li><a href="index-4.html#"><img src="images/flags/ca.gif" alt="CA" /></a></li>
								<li><a href="index-4.html#"><img src="images/flags/de.gif" alt="DE" /></a></li>
								<li><a href="index-4.html#"><img src="images/flags/es.gif" alt="ES" /></a></li>
								<li><a href="index-4.html#"><img src="images/flags/et.gif" alt="ET" /></a></li>
								<li><a href="index-4.html#"><img src="images/flags/fa.gif" alt="FA" /></a></li>
								<li><a href="index-4.html#"><img src="images/flags/fr.gif" alt="FR" /></a></li>
								<li><a href="index-4.html#"><img src="images/flags/ja.gif" alt="JA" /></a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
  );
};
export default TopHeader;
