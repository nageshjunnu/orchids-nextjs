import React, { useState } from "react";
const OrchidsLogo =
  "https://www.orchidsinternationalschool.com/wp-content/uploads/2023/03/orchids-logo.jpg";
const MobileHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="fixed-top bg-white shadow-sm">
        <div className=" py-1">
          <div className="row">
            <div
              className="col-2 py-2"
              style={{ display: "grid", placeItems: "center" }}
              onClick={() => setDrawerOpen(true)}
            >
              <div className="my-auto">
                <i className="fa fa-bars th-20" aria-hidden="true"></i>
              </div>
            </div>
            <div className="col-8 text-center py-2">
              <div className="my-auto">
                <a href="/">
                  <img
                    alt="Orchids Logo"
                    className="my-auto"
                    src={OrchidsLogo}
                    style={{
                      height: 40,
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>

      <div style={{ height: 49.21 }}></div>

      {/* Drawer */}

      {drawerOpen ? (
        <div
          className="th-side-drawer-backdrop"
          onClick={() => setDrawerOpen((prevState) => !prevState)}
        />
      ) : null}

      <div
        className={
          drawerOpen
            ? "th-side-drawer open shadow-sm py-2 rounded-right"
            : "th-side-drawer shadow-sm py-2 rounded-right"
        }
      >
        <div className="text-center">
          <div className="my-auto">
            <a
              href="/"
              onClick={() => setDrawerOpen((prevState) => !prevState)}
            >
              <img
                alt="Orchids Logo"
                className="my-auto"
                src={OrchidsLogo}
                style={{
                  height: 24,
                }}
              />
            </a>
          </div>
        </div>
        <hr className="mb-4 px-3" />

        <div className="my-3 px-3">
          <a
            className={"th-16 w-100 "}
            href="/"
            onClick={() => setDrawerOpen((prevState) => !prevState)}
          >
            Home
          </a>
        </div>
        <div className="my-3 px-3">
          <a
            className={"th-16 w-100 "}
            href="/branch"
            onClick={() => setDrawerOpen((prevState) => !prevState)}
          >
            Branch
          </a>
        </div>
        <div className="my-3 px-3">
          <a
            className={"th-16 w-100 "}
            href="/about"
            onClick={() => setDrawerOpen((prevState) => !prevState)}
          >
            About
          </a>
        </div>
        <div className="my-3 px-3">
          <a
            className={"th-16 w-100 "}
            href="/contact"
            onClick={() => setDrawerOpen((prevState) => !prevState)}
          >
            Contact
          </a>
        </div>

        <div className="bg-light p-3">
          <div className="my-3 th-text-hint th-fw-300">Academics :</div>
          <div className="my-3 pl-3">
            <a
              className={"th-16 w-100 "}
              href="/coming-soon"
              onClick={() => setDrawerOpen((prevState) => !prevState)}
            >
              Curriculum
            </a>
          </div>

          <div className="my-3 pl-3">
            <a
              className={"th-16 w-100 "}
              href="/coming-soon"
              onClick={() => setDrawerOpen((prevState) => !prevState)}
            >
              Learning Concepts
            </a>
          </div>
          <div className="my-3 pl-3">
            <a
              className={"th-16 w-100 "}
              href="/coming-soon"
              onClick={() => setDrawerOpen((prevState) => !prevState)}
            >
              Lerning Beyond
            </a>
          </div>
          <div className="my-3 pl-3">
            <a
              className={"th-16 w-100 "}
              href="/coming-soon"
              onClick={() => setDrawerOpen((prevState) => !prevState)}
            >
              Programs
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileHeader;
