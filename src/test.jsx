var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        {'{'}/* {/* Dash Navbar Top */} */{'}'}
        <nav className="navbar navbar-light bg-faded navbar-static-top dash-navbar-top nb-visible">
          <button className="nb-btn-toggle">
            <span className="fa fa-bars" />
          </button>
        </nav>
        {'{'}/* {/* Dash Navbar Left */} */{'}'}
        <div className="dash-navbar-left nb-visible">
          <a className="navbar-brand" href="#">Navbar</a>
          <p className="nb-nav-title">Home</p>
          <ul className="nb-nav">
            <li>
              <a className="collapsed" data-toggle="collapse" href="#collapseStatistics" aria-expanded="false" aria-controls="collapseStatistics">
                <span className="glyphicon glyphicon-stats nb-link-icon" />
                <span className="nb-link-text">Statistics</span>
                <span className="fa fa-angle-up nb-btn-sub-collapse" />
              </a>
              {'{'}/* {/* Dropdown level one */} */{'}'}
              <ul className="nb-sub-one collapse" id="collapseStatistics">
                <li>
                  <a href="#">
                    <span className="fa fa-clock-o nb-link-icon" />
                    <span className="nb-link-text">Daily</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-history nb-link-icon" />
                    <span className="nb-link-text">Annual</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="active">
              <a href="#">
                <span className="glyphicon glyphicon-folder-open nb-link-icon" />
                <span className="nb-link-text">Pages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-comment nb-link-icon" />
                <span className="nb-link-text">Comments</span>
                <span className="badge">4</span>
              </a>
            </li>
            <li>
              <a className="collapsed" data-toggle="collapse" href="#collapseLevelOne" aria-expanded="false" aria-controls="collapseLevelOne">
                <span className="fa fa-sort-amount-desc nb-link-icon" />
                <span className="nb-link-text">Dropdown level 1</span>
                <span className="fa fa-angle-up nb-btn-sub-collapse" />
              </a>
              {'{'}/* {/* Dropdown level one */} */{'}'}
              <ul className="nb-sub-one collapse" id="collapseLevelOne">
                <li>
                  <a href="#">
                    <span className="fa fa-slack nb-link-icon" />
                    <span className="nb-link-text">Level 1</span>
                  </a>
                </li>
                <li>
                  <a className="collapsed" data-toggle="collapse" href="#collapseLevelTwo" aria-expanded="false" aria-controls="collapseLevelTwo">
                    <span className="fa fa-level-down nb-link-icon" />
                    <span className="nb-link-text">Dropdown level 2</span>
                    <span className="fa fa-angle-up nb-btn-sub-collapse" />
                  </a>
                  {'{'}/* {/* Dropdown level two */} */{'}'}
                  <ul className="nb-sub-two collapse" id="collapseLevelTwo">
                    <li>
                      <a href="#">
                        <span className="fa fa-wifi nb-link-icon" />
                        <span className="nb-link-text">Level 2</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-wifi nb-link-icon" />
                        <span className="nb-link-text">Level 2</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-wifi nb-link-icon" />
                        <span className="nb-link-text">Level 2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-slack nb-link-icon" />
                    <span className="nb-link-text">Level 1</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <p className="nb-nav-title">Filter</p>
          <ul className="nb-nav">
            <li>
              <a href="#">
                <span className="fa fa-image nb-link-icon" />
                <span className="nb-link-text">Image</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-video-camera nb-link-icon" />
                <span className="nb-link-text">Video</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-folder-open nb-link-icon" />
                <span className="nb-link-text">Audio</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-file-text nb-link-icon" />
                <span className="nb-link-text">File</span>
                <span className="badge">4</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-link nb-link-icon" />
                <span className="nb-link-text">Active link</span>
              </a>
            </li>
          </ul>
          <p className="nb-nav-title">Category</p>
          <ul className="nb-nav">
            <li>
              <a className="collapsed" data-toggle="collapse" href="#collapseCategoryAll" aria-expanded="false" aria-controls="collapseCategoryAll">
                <span className="glyphicon glyphicon-tags nb-link-icon" />
                <span className="nb-link-text">All</span>
                <span className="fa fa-angle-up nb-btn-sub-collapse" />
              </a>
              {'{'}/* {/* Dropdown level one */} */{'}'}
              <ul className="nb-sub-one collapse" id="collapseCategoryAll">
                <li>
                  <a href="#">
                    <span className="fa fa-dot-circle-o nb-link-icon" />
                    <span className="nb-link-text">UI</span>
                    <span className="badge">4</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-dot-circle-o nb-link-icon" />
                    <span className="nb-link-text">Design</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-dot-circle-o nb-link-icon" />
                    <span className="nb-link-text">App</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-dot-circle-o nb-link-icon" />
                    <span className="nb-link-text">Homepage</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-dot-circle-o nb-link-icon" />
                <span className="nb-link-text">Popular</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-dot-circle-o nb-link-icon" />
                <span className="nb-link-text">Handpicked</span>
              </a>
            </li>
          </ul>
        </div> 
        <div className="content-wrap nb-visible" data-effect="nb-push">
          <div className="container-fluid">
            <div className="row">
              {'{'}/* {/* Your content here */} */{'}'}
              <div className="dummy-div" style={{height: '1500px'}}>
              </div>
              {'{'}/* {/* End of your content */} */{'}'}
            </div>
          </div>
        </div>
      </div>
    );
  }
});