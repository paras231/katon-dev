import React from "react";
import footer from "../assets/footer.svg";
import icons from "../assets/socialicons.png";
import quicklinks from "../assets/quicklinks.png";
import { styled } from "@mui/system";
import pin from "../assets/footericon1.png";
import phone from "../assets/footericon2.png";
import mail from "../assets/mainl.png";

const Links = styled("div")(({ theme }) => ({
  [theme.breakpoints.only("xl")]: {
    marginTop: "20vh",
  },
  [theme.breakpoints.down("xl")]: {
    marginTop: "-30vh",
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: "30vh",
  },
}));

const KatonDiv = styled("div")(({ theme }) => ({
  [theme.breakpoints.only("xl")]: {
    display: "grid",
    marginTop: "10vh",
    "& p": {
      // marginTop:'10vh'
    },
  },
  [theme.breakpoints.down("xl")]: {
    display: "grid",
    marginTop: "-20vh",
  },
  [theme.breakpoints.up("lg")]: {
    display: "grid",
    marginTop: "10vh",
  },
}));

const Footer = () => {
  return (
    <>
      <div
        style={{
          marginTop: "20vh",
          //   display: "flex",
          marginBottom:'-50vh'
        }}
      >
        <img style={{ width: "100%" }} src={footer} />

        <div
          style={{
            position: "absolute",
            marginTop: "-62vh",
            marginLeft: "10vw",
          }}
        >
          <KatonDiv
            style={{
              display: "grid",
            }}
          >
            <h1
              style={{
                color: "white",
              }}
            >
              KATON
            </h1>
            <p
              style={{
                color: "white",
                marginTop: "-5vh",
                marginLeft: "0vw",
                fontSize: "12px",
              }}
            >
              360 degree break
            </p>
            <div
              style={{
                width: "25vw",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "13px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                doloribus. Odio quasi amet et ratione explicabo non at! Error,
                totam.
              </p>
            </div>
          </KatonDiv>
          <div
            style={{
              display: "flex",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "10px",
              }}
            >
              FOLLOW US
            </p>
            <img
              style={{
                width: "8vw",
                height: "4vh",
                marginLeft: "14px",
                marginTop: "10px",
                cursor: "pointer",
              }}
              src={icons}
            />
          </div>
        </div>
        {/* quick links div */}
        <Links>
          <div
            style={{
              position: "absolute",
              marginTop: "-67vh",
              marginLeft: "45vw",
            }}
          >
            <div
              style={{
                display: "grid",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                }}
              >
                QUICK LINKS
              </p>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                ABOUT US
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                What Is Katon
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Freelancer Teacher
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Individual Student
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Content Expert
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Publisher
              </li>
            </div>

            <div></div>
          </div>
          <div
            style={{
              position: "absolute",
              marginTop: "-67vh",
              marginLeft: "59vw",
            }}
          >
            <div
              style={{
                display: "grid",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Support
              </p>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Help
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Contact Us
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Write To us
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Privacy Policy
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                Terms of use
              </li>
            </div>

            <div></div>
          </div>
          <div
            style={{
              position: "absolute",
              marginTop: "-67vh",
              marginLeft: "75vw",
            }}
          >
            <div
              style={{
                display: "grid",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Address
              </p>
              <li
                style={{
                  color: "white",
                  fontSize: "10px",
                  listStyle: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width:'20vw'
                  }}
                >
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      marginTop: "10px",
                    }}
                    src={pin}
                  />
                  <p
                    style={{
                      marginLeft: "12px",
                    }}
                  >
                    Moutn Eliabeth Novena Specialist Center 38 Irrawady Rd
                    #04-29 Singapore 329563
                  </p>
                </div>
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                  listStyle: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      marginTop: "10px",
                    }}
                    src={phone}
                  />
                  <p
                    style={{
                      marginLeft: "12px",
                    }}
                  >
                    Tel: +65 6694 0020
                  </p>
                </div>
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "12px",
                  listStyle: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      marginTop: "10px",
                    }}
                    src={mail}
                  />
                  <p
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Youremail@gmail.cp,
                  </p>
                </div>
              </li>
            </div>

            <div></div>
          </div>
        </Links>
      </div>
    </>
  );
};

export default Footer;
