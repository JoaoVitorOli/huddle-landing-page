import Head from 'next/head';
import Image from "next/image"
import { AiFillFacebook, AiOutlineInstagram, AiFillTwitterSquare } from "react-icons/ai"
 
import { Header, HeadeWrapper, ButtonHeader } from "../styles/pages/Home/Header/Header";
import { FirstSection, Top, Mid, Bottom } from "../styles/pages/Home/FirstSection/FirstSection";
import { SecondSection, SecondSectDiv, SecondSectDivImage } from "../styles/pages/Home/SecondSection/SecondSection";
import { ThirdSectDiv, ThirdSectDivImage, ThirdSection } from "../styles/pages/Home/ThirdSection/ThirdSection";
import { FourthSectDiv, FourthSectDivImage, FourthSection } from "../styles/pages/Home/FourthSection/FourthSection";
import { FifthSection, FifthSectDiv } from "../styles/pages/Home/FifthSection/FifthSection";
import { Footer, FooterWrapper, FooterSocialMedia, FooterNewsletter } from "../styles/pages/Home/Footer/Footer";
import Main from "../styles/pages/Home/Main/Main";
import Button from "../styles/pages/Button/index";

import IconCommunities from "../../public/icon-communities.svg";
import IconMessages from "../../public/icon-messages.svg";

export default function Home() {
  return(
    <>
      <Head>
        <title>Frontend Mentor | Huddle landing page</title>
      </Head>
      
      <Header>
        <HeadeWrapper>
          <div>
            <Image
              src="/logo.svg"
              alt="Picture of the author"
              width={240}
              height={39}
              className="imageLogo"
              />
          </div>
          <ButtonHeader>Try it Free</ButtonHeader>
        </HeadeWrapper>
      </Header>

      <Main>
        <FirstSection>
          <Top>
            <h1>
              Build The Community Your Fans Will Love
            </h1>

            <div>
              <p>
                Huddle re-imagines the way we build communities. You have a voice, but so does 
                your audience. Create connections with your users as you engage in genuine discussion. 
              </p>
            </div>

            <Button>
              Get Started For Free
            </Button>
          </Top>
          
          <Mid>
            <Image
              src="/screen-mockups.svg"
              alt="Picture of the author"
              width={932}
              height={739}
            />
            {/* <ScreenMockups /> */}
          </Mid>

          <Bottom>
            <div>
              <IconCommunities />
              <span>1.4k+</span>
              <p>Communities Formed</p>
            </div>

            <div>
              <IconMessages />
              <span>2.7m+</span>
              <p>Messages Sent</p>
            </div>
          </Bottom>      
        </FirstSection>

        <SecondSection>
          <SecondSectDiv>
            <div className="div-growtogether">
              <h2>Grow Together</h2>
              <p>
                Generate meaningful discussions with your audience and build a strong, loyal community. 
                Think of the insightful conversations you miss out on with a feedback form.
              </p>
            </div>

            <SecondSectDivImage>
              <Image
                src="/illustration-grow-together.svg"
                width={323.46}
                height={250}
              />
            </SecondSectDivImage>
          </SecondSectDiv>
        </SecondSection>

        <ThirdSection>
          <ThirdSectDiv>
            <ThirdSectDivImage>
              <Image
                src="/illustration-flowing-conversation.png"
                alt="Picture of the author"
                width={323.46}
                height={237}
              />
            </ThirdSectDivImage>

            <div className="div-growtogether">
              <h2>Flowing Conversations</h2>
              <p>
                You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
                just-in-time loading for a more natural flow.
              </p>
            </div>
          </ThirdSectDiv>
        </ThirdSection>

        <FourthSection>
          <FourthSectDiv>
            <div className="div-growtogether">
              <h2>Your Users</h2>
              <p>
                It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
                once signed in to your app, your users can start chatting immediately.
              </p>
            </div>

            <FourthSectDivImage>
              <Image
                src="/illustration-your-users.png"
                // width="1023.46" height="837
                width={323.46}
                height={250}
              />
            </FourthSectDivImage>
          </FourthSectDiv>
        </FourthSection>

        <FifthSection>
          <FifthSectDiv>
            <h1>Ready To Build Your Community?</h1>

            <Button>Get Started For Free</Button>
          </FifthSectDiv>
        </FifthSection>
      </Main>

      <Footer>
        <FooterWrapper>
          <FooterSocialMedia>
            <div>
              <Image
                src="/logo-white.png"
                width={240}
                height={39}
              />
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
                vestibulum a, ultrices quis sem.
              </p>
            </div>
            
            <div>
              <Image
                src="/icon-phone.svg"
                width={25}
                height={16}
              />
              <p>Phone: +1-543-123-4567</p>
            </div>
            <div>
              <Image
                src="/icon-email.svg"
                width={25}
                height={16}
              />
              <p>example@huddle.com</p>
            </div>

            <div>
              <AiFillFacebook size={30} />
              <AiOutlineInstagram size={30} />
              <AiFillTwitterSquare size={30} />
            </div>
          </FooterSocialMedia>

          <FooterNewsletter>
            <h2>NEWSLETTER</h2>

            <div>
              <div id="p-id">
                <p>
                  To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
                  send you spam or pass on your email address
                </p>
              </div>

              <div id="Input-button-id">
                <input type="email"/>
                <button>Subscribe</button>
              </div>
            </div>
          </FooterNewsletter>
        </FooterWrapper>
      </Footer>
    </>
  );
}

;
