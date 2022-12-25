import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Menu } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { useMainContainerCb, useHero1ConCb, useFlex21Cb, useFlex22Cb, useNavbarConCb, useFlex12Cb, useTrustedByConCb, useFlex33Cb, useServicesCb, useFlex41Cb, useFlex43Cb, useFlex44Cb, useFlex45Cb, useProjectsCb, useProjectHeaderCb, useProjectTitleCb, useHeadingCb, useFlex53Cb, useFlex54Cb, useProjectDetailsCb, useFlex144Cb, useFlex143Cb, useFlex146Cb, useFlex145Cb, useFlex210Cb, useBlogsCb, useBlogsConCb, useBlogTitleCb, useBlogDetailCb, useFlex87Cb, useFlex123Cb, useFlex122Cb, useFlex127Cb, useFlex126Cb, useFlex129Cb, useFlex128Cb, useProductDesignerCb, useProductTopCb, useFlex138Cb, useFlex139Cb, useImageConCb, useFlex148Cb, useBlackBGCb, useFAQCONCb, useFAQHEADCb, useAllQuesCb, useQR1Cb, useFlex170Cb, useFlex169Cb, useFlex174Cb, useFlex175Cb, useFlex176Cb, useQR2Cb, useFlex184Cb, useFlex185Cb, useFlex186Cb, useFlex187Cb, useFlex183Cb, useFooterCb, useFootheadCb, useAllLinksCb, useLRCb, useRRCb, useR1Cb, useFlex200Cb, useFlex201Cb, useTestomonialCb, useTestHeadCb, useTConCb, useFlex205Cb, useTRRCb, useTRRBottomCb, useFlex208Cb, useFlex209Cb, useEduWorkCb, useEduConCb, useHeadCb, useEduDetailsCb, useEduDetailCb, useUniNameCb, useCourseCb, useFlex221Cb, useFlex219Cb, useFlex220Cb, useFlex227Cb, useFlex225Cb, useFlex226Cb, useFlex245Cb, useFlex243Cb, useFlex242Cb, useFlex246Cb, useFlex238Cb, useFlex239Cb, useFlex250Cb, useFlex249Cb, useFlex247Cb, useFlex248Cb, useFlex254Cb, useFlex253Cb, useFlex251Cb, useFlex252Cb, useFlex244Cb, useImage9Cb, useTextBox8Cb, useTextBox9Cb, useButton4Cb, useLink14Cb, useImage4Cb, useMenu1Cb, useLink9Cb, useLink10Cb, useLink11Cb, useLink12Cb, useLink13Cb, useTextBox10Cb, useImage12Cb, useImage13Cb, useImage14Cb, useImage16Cb, useTextBox11Cb, useTextBox12Cb, useTextBox49Cb, useTextBox50Cb, useTextBox51Cb, useTextBox52Cb, useTextBox53Cb, useImage24Cb, useImage25Cb, useTextBox54Cb, useTextBox55Cb, useTextBox56Cb, useTextBox57Cb, useTextBox58Cb, useImage26Cb, useTextBox59Cb, useTextBox60Cb, useTextBox61Cb, useTextBox62Cb, useTextBox63Cb, useTextBox64Cb, useButton5Cb, useTextBox67Cb, useTextBox68Cb, useImage27Cb, useTextBox71Cb, useTextBox72Cb, useTextBox73Cb, useImage35Cb, useTextBox223Cb, useTextBox224Cb, useTextBox225Cb, useImage36Cb, useTextBox226Cb, useTextBox227Cb, useTextBox228Cb, useTextBox95Cb, useTextBox96Cb, useTextBox97Cb, useTextBox101Cb, useTextBox103Cb, useTextBox104Cb, useTextBox198Cb, useTextBox199Cb, useTextBox200Cb, useTextBox204Cb, useTextBox205Cb, useTextBox206Cb, useTextBox207Cb, useTextBox208Cb, useTextBox209Cb, useTextBox222Cb, useTextBox219Cb, useTextBox220Cb, useImage37Cb, useImage38Cb, useImage39Cb, useImage40Cb, useTextBox229Cb, useTextBox230Cb, useTextBox239Cb, useTextBox241Cb, useTextBox242Cb, useTextBox243Cb, useTextBox249Cb, useTextBox250Cb, useTextBox251Cb, useTextBox248Cb, useLink16Cb, useTextBox252Cb, useTextBox253Cb, useTextBox254Cb, useTextBox255Cb, useTextBox256Cb, useTextBox257Cb, useTextBox258Cb, useTextBox259Cb, useTextBox267Cb, useTextBox268Cb, useTextBox269Cb, useTextBox270Cb, useTextBox271Cb, useTextBox272Cb, useTEXTBOX273Cb, useTextBox274Cb, useTLRCb, useTextBox275Cb, useTextBox276Cb, useTextBox277Cb, useTextBox278Cb, useTextBox279Cb, useTextBox280Cb, useTextBox281Cb, useTextBox282Cb, useTextBox283Cb, useTextBox284Cb, useTextBox288Cb, useTextBox289Cb, useTextBox290Cb, useTextBox303Cb, useTextBox304Cb, useTextBox305Cb, useTextBox307Cb, useTextBox308Cb, useTextBox309Cb, useTextBox310Cb, useTextBox311Cb, useTextBox312Cb, useTextBox306Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const MainContainerProps = useStore((state)=>state["Home"]["MainContainer"]);
const MainContainerIoProps = useIoStore((state)=>state["Home"]["MainContainer"]);
const MainContainerCb = useMainContainerCb()
const Hero1ConProps = useStore((state)=>state["Home"]["Hero1Con"]);
const Hero1ConIoProps = useIoStore((state)=>state["Home"]["Hero1Con"]);
const Hero1ConCb = useHero1ConCb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const NavbarConProps = useStore((state)=>state["Home"]["NavbarCon"]);
const NavbarConIoProps = useIoStore((state)=>state["Home"]["NavbarCon"]);
const NavbarConCb = useNavbarConCb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const TrustedByConProps = useStore((state)=>state["Home"]["TrustedByCon"]);
const TrustedByConIoProps = useIoStore((state)=>state["Home"]["TrustedByCon"]);
const TrustedByConCb = useTrustedByConCb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const ServicesProps = useStore((state)=>state["Home"]["Services"]);
const ServicesIoProps = useIoStore((state)=>state["Home"]["Services"]);
const ServicesCb = useServicesCb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const ProjectsProps = useStore((state)=>state["Home"]["Projects"]);
const ProjectsIoProps = useIoStore((state)=>state["Home"]["Projects"]);
const ProjectsCb = useProjectsCb()
const ProjectHeaderProps = useStore((state)=>state["Home"]["ProjectHeader"]);
const ProjectHeaderIoProps = useIoStore((state)=>state["Home"]["ProjectHeader"]);
const ProjectHeaderCb = useProjectHeaderCb()
const ProjectTitleProps = useStore((state)=>state["Home"]["ProjectTitle"]);
const ProjectTitleIoProps = useIoStore((state)=>state["Home"]["ProjectTitle"]);
const ProjectTitleCb = useProjectTitleCb()
const HeadingProps = useStore((state)=>state["Home"]["Heading"]);
const HeadingIoProps = useIoStore((state)=>state["Home"]["Heading"]);
const HeadingCb = useHeadingCb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const ProjectDetailsProps = useStore((state)=>state["Home"]["ProjectDetails"]);
const ProjectDetailsIoProps = useIoStore((state)=>state["Home"]["ProjectDetails"]);
const ProjectDetailsCb = useProjectDetailsCb()
const Flex144Props = useStore((state)=>state["Home"]["Flex144"]);
const Flex144IoProps = useIoStore((state)=>state["Home"]["Flex144"]);
const Flex144Cb = useFlex144Cb()
const Flex143Props = useStore((state)=>state["Home"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["Home"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Flex146Props = useStore((state)=>state["Home"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["Home"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Flex145Props = useStore((state)=>state["Home"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["Home"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Flex210Props = useStore((state)=>state["Home"]["Flex210"]);
const Flex210IoProps = useIoStore((state)=>state["Home"]["Flex210"]);
const Flex210Cb = useFlex210Cb()
const BlogsProps = useStore((state)=>state["Home"]["Blogs"]);
const BlogsIoProps = useIoStore((state)=>state["Home"]["Blogs"]);
const BlogsCb = useBlogsCb()
const BlogsConProps = useStore((state)=>state["Home"]["BlogsCon"]);
const BlogsConIoProps = useIoStore((state)=>state["Home"]["BlogsCon"]);
const BlogsConCb = useBlogsConCb()
const BlogTitleProps = useStore((state)=>state["Home"]["BlogTitle"]);
const BlogTitleIoProps = useIoStore((state)=>state["Home"]["BlogTitle"]);
const BlogTitleCb = useBlogTitleCb()
const BlogDetailProps = useStore((state)=>state["Home"]["BlogDetail"]);
const BlogDetailIoProps = useIoStore((state)=>state["Home"]["BlogDetail"]);
const BlogDetailCb = useBlogDetailCb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const ProductDesignerProps = useStore((state)=>state["Home"]["ProductDesigner"]);
const ProductDesignerIoProps = useIoStore((state)=>state["Home"]["ProductDesigner"]);
const ProductDesignerCb = useProductDesignerCb()
const ProductTopProps = useStore((state)=>state["Home"]["ProductTop"]);
const ProductTopIoProps = useIoStore((state)=>state["Home"]["ProductTop"]);
const ProductTopCb = useProductTopCb()
const Flex138Props = useStore((state)=>state["Home"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Home"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex139Props = useStore((state)=>state["Home"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["Home"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const ImageConProps = useStore((state)=>state["Home"]["ImageCon"]);
const ImageConIoProps = useIoStore((state)=>state["Home"]["ImageCon"]);
const ImageConCb = useImageConCb()
const Flex148Props = useStore((state)=>state["Home"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["Home"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const BlackBGProps = useStore((state)=>state["Home"]["BlackBG"]);
const BlackBGIoProps = useIoStore((state)=>state["Home"]["BlackBG"]);
const BlackBGCb = useBlackBGCb()
const FAQCONProps = useStore((state)=>state["Home"]["FAQCON"]);
const FAQCONIoProps = useIoStore((state)=>state["Home"]["FAQCON"]);
const FAQCONCb = useFAQCONCb()
const FAQHEADProps = useStore((state)=>state["Home"]["FAQHEAD"]);
const FAQHEADIoProps = useIoStore((state)=>state["Home"]["FAQHEAD"]);
const FAQHEADCb = useFAQHEADCb()
const AllQuesProps = useStore((state)=>state["Home"]["AllQues"]);
const AllQuesIoProps = useIoStore((state)=>state["Home"]["AllQues"]);
const AllQuesCb = useAllQuesCb()
const QR1Props = useStore((state)=>state["Home"]["QR1"]);
const QR1IoProps = useIoStore((state)=>state["Home"]["QR1"]);
const QR1Cb = useQR1Cb()
const Flex170Props = useStore((state)=>state["Home"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["Home"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const Flex169Props = useStore((state)=>state["Home"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["Home"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex174Props = useStore((state)=>state["Home"]["Flex174"]);
const Flex174IoProps = useIoStore((state)=>state["Home"]["Flex174"]);
const Flex174Cb = useFlex174Cb()
const Flex175Props = useStore((state)=>state["Home"]["Flex175"]);
const Flex175IoProps = useIoStore((state)=>state["Home"]["Flex175"]);
const Flex175Cb = useFlex175Cb()
const Flex176Props = useStore((state)=>state["Home"]["Flex176"]);
const Flex176IoProps = useIoStore((state)=>state["Home"]["Flex176"]);
const Flex176Cb = useFlex176Cb()
const QR2Props = useStore((state)=>state["Home"]["QR2"]);
const QR2IoProps = useIoStore((state)=>state["Home"]["QR2"]);
const QR2Cb = useQR2Cb()
const Flex184Props = useStore((state)=>state["Home"]["Flex184"]);
const Flex184IoProps = useIoStore((state)=>state["Home"]["Flex184"]);
const Flex184Cb = useFlex184Cb()
const Flex185Props = useStore((state)=>state["Home"]["Flex185"]);
const Flex185IoProps = useIoStore((state)=>state["Home"]["Flex185"]);
const Flex185Cb = useFlex185Cb()
const Flex186Props = useStore((state)=>state["Home"]["Flex186"]);
const Flex186IoProps = useIoStore((state)=>state["Home"]["Flex186"]);
const Flex186Cb = useFlex186Cb()
const Flex187Props = useStore((state)=>state["Home"]["Flex187"]);
const Flex187IoProps = useIoStore((state)=>state["Home"]["Flex187"]);
const Flex187Cb = useFlex187Cb()
const Flex183Props = useStore((state)=>state["Home"]["Flex183"]);
const Flex183IoProps = useIoStore((state)=>state["Home"]["Flex183"]);
const Flex183Cb = useFlex183Cb()
const FooterProps = useStore((state)=>state["Home"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["Home"]["Footer"]);
const FooterCb = useFooterCb()
const FootheadProps = useStore((state)=>state["Home"]["Foothead"]);
const FootheadIoProps = useIoStore((state)=>state["Home"]["Foothead"]);
const FootheadCb = useFootheadCb()
const AllLinksProps = useStore((state)=>state["Home"]["AllLinks"]);
const AllLinksIoProps = useIoStore((state)=>state["Home"]["AllLinks"]);
const AllLinksCb = useAllLinksCb()
const LRProps = useStore((state)=>state["Home"]["LR"]);
const LRIoProps = useIoStore((state)=>state["Home"]["LR"]);
const LRCb = useLRCb()
const RRProps = useStore((state)=>state["Home"]["RR"]);
const RRIoProps = useIoStore((state)=>state["Home"]["RR"]);
const RRCb = useRRCb()
const R1Props = useStore((state)=>state["Home"]["R1"]);
const R1IoProps = useIoStore((state)=>state["Home"]["R1"]);
const R1Cb = useR1Cb()
const Flex200Props = useStore((state)=>state["Home"]["Flex200"]);
const Flex200IoProps = useIoStore((state)=>state["Home"]["Flex200"]);
const Flex200Cb = useFlex200Cb()
const Flex201Props = useStore((state)=>state["Home"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["Home"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const TestomonialProps = useStore((state)=>state["Home"]["Testomonial"]);
const TestomonialIoProps = useIoStore((state)=>state["Home"]["Testomonial"]);
const TestomonialCb = useTestomonialCb()
const TestHeadProps = useStore((state)=>state["Home"]["TestHead"]);
const TestHeadIoProps = useIoStore((state)=>state["Home"]["TestHead"]);
const TestHeadCb = useTestHeadCb()
const TConProps = useStore((state)=>state["Home"]["TCon"]);
const TConIoProps = useIoStore((state)=>state["Home"]["TCon"]);
const TConCb = useTConCb()
const Flex205Props = useStore((state)=>state["Home"]["Flex205"]);
const Flex205IoProps = useIoStore((state)=>state["Home"]["Flex205"]);
const Flex205Cb = useFlex205Cb()
const TRRProps = useStore((state)=>state["Home"]["TRR"]);
const TRRIoProps = useIoStore((state)=>state["Home"]["TRR"]);
const TRRCb = useTRRCb()
const TRRBottomProps = useStore((state)=>state["Home"]["TRRBottom"]);
const TRRBottomIoProps = useIoStore((state)=>state["Home"]["TRRBottom"]);
const TRRBottomCb = useTRRBottomCb()
const Flex208Props = useStore((state)=>state["Home"]["Flex208"]);
const Flex208IoProps = useIoStore((state)=>state["Home"]["Flex208"]);
const Flex208Cb = useFlex208Cb()
const Flex209Props = useStore((state)=>state["Home"]["Flex209"]);
const Flex209IoProps = useIoStore((state)=>state["Home"]["Flex209"]);
const Flex209Cb = useFlex209Cb()
const EduWorkProps = useStore((state)=>state["Home"]["EduWork"]);
const EduWorkIoProps = useIoStore((state)=>state["Home"]["EduWork"]);
const EduWorkCb = useEduWorkCb()
const EduConProps = useStore((state)=>state["Home"]["EduCon"]);
const EduConIoProps = useIoStore((state)=>state["Home"]["EduCon"]);
const EduConCb = useEduConCb()
const HeadProps = useStore((state)=>state["Home"]["Head"]);
const HeadIoProps = useIoStore((state)=>state["Home"]["Head"]);
const HeadCb = useHeadCb()
const EduDetailsProps = useStore((state)=>state["Home"]["EduDetails"]);
const EduDetailsIoProps = useIoStore((state)=>state["Home"]["EduDetails"]);
const EduDetailsCb = useEduDetailsCb()
const EduDetailProps = useStore((state)=>state["Home"]["EduDetail"]);
const EduDetailIoProps = useIoStore((state)=>state["Home"]["EduDetail"]);
const EduDetailCb = useEduDetailCb()
const UniNameProps = useStore((state)=>state["Home"]["UniName"]);
const UniNameIoProps = useIoStore((state)=>state["Home"]["UniName"]);
const UniNameCb = useUniNameCb()
const CourseProps = useStore((state)=>state["Home"]["Course"]);
const CourseIoProps = useIoStore((state)=>state["Home"]["Course"]);
const CourseCb = useCourseCb()
const Flex221Props = useStore((state)=>state["Home"]["Flex221"]);
const Flex221IoProps = useIoStore((state)=>state["Home"]["Flex221"]);
const Flex221Cb = useFlex221Cb()
const Flex219Props = useStore((state)=>state["Home"]["Flex219"]);
const Flex219IoProps = useIoStore((state)=>state["Home"]["Flex219"]);
const Flex219Cb = useFlex219Cb()
const Flex220Props = useStore((state)=>state["Home"]["Flex220"]);
const Flex220IoProps = useIoStore((state)=>state["Home"]["Flex220"]);
const Flex220Cb = useFlex220Cb()
const Flex227Props = useStore((state)=>state["Home"]["Flex227"]);
const Flex227IoProps = useIoStore((state)=>state["Home"]["Flex227"]);
const Flex227Cb = useFlex227Cb()
const Flex225Props = useStore((state)=>state["Home"]["Flex225"]);
const Flex225IoProps = useIoStore((state)=>state["Home"]["Flex225"]);
const Flex225Cb = useFlex225Cb()
const Flex226Props = useStore((state)=>state["Home"]["Flex226"]);
const Flex226IoProps = useIoStore((state)=>state["Home"]["Flex226"]);
const Flex226Cb = useFlex226Cb()
const Flex245Props = useStore((state)=>state["Home"]["Flex245"]);
const Flex245IoProps = useIoStore((state)=>state["Home"]["Flex245"]);
const Flex245Cb = useFlex245Cb()
const Flex243Props = useStore((state)=>state["Home"]["Flex243"]);
const Flex243IoProps = useIoStore((state)=>state["Home"]["Flex243"]);
const Flex243Cb = useFlex243Cb()
const Flex242Props = useStore((state)=>state["Home"]["Flex242"]);
const Flex242IoProps = useIoStore((state)=>state["Home"]["Flex242"]);
const Flex242Cb = useFlex242Cb()
const Flex246Props = useStore((state)=>state["Home"]["Flex246"]);
const Flex246IoProps = useIoStore((state)=>state["Home"]["Flex246"]);
const Flex246Cb = useFlex246Cb()
const Flex238Props = useStore((state)=>state["Home"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["Home"]["Flex238"]);
const Flex238Cb = useFlex238Cb()
const Flex239Props = useStore((state)=>state["Home"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["Home"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const Flex250Props = useStore((state)=>state["Home"]["Flex250"]);
const Flex250IoProps = useIoStore((state)=>state["Home"]["Flex250"]);
const Flex250Cb = useFlex250Cb()
const Flex249Props = useStore((state)=>state["Home"]["Flex249"]);
const Flex249IoProps = useIoStore((state)=>state["Home"]["Flex249"]);
const Flex249Cb = useFlex249Cb()
const Flex247Props = useStore((state)=>state["Home"]["Flex247"]);
const Flex247IoProps = useIoStore((state)=>state["Home"]["Flex247"]);
const Flex247Cb = useFlex247Cb()
const Flex248Props = useStore((state)=>state["Home"]["Flex248"]);
const Flex248IoProps = useIoStore((state)=>state["Home"]["Flex248"]);
const Flex248Cb = useFlex248Cb()
const Flex254Props = useStore((state)=>state["Home"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["Home"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Flex253Props = useStore((state)=>state["Home"]["Flex253"]);
const Flex253IoProps = useIoStore((state)=>state["Home"]["Flex253"]);
const Flex253Cb = useFlex253Cb()
const Flex251Props = useStore((state)=>state["Home"]["Flex251"]);
const Flex251IoProps = useIoStore((state)=>state["Home"]["Flex251"]);
const Flex251Cb = useFlex251Cb()
const Flex252Props = useStore((state)=>state["Home"]["Flex252"]);
const Flex252IoProps = useIoStore((state)=>state["Home"]["Flex252"]);
const Flex252Cb = useFlex252Cb()
const Flex244Props = useStore((state)=>state["Home"]["Flex244"]);
const Flex244IoProps = useIoStore((state)=>state["Home"]["Flex244"]);
const Flex244Cb = useFlex244Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const Link14Props = useStore((state)=>state["Home"]["Link14"]);
const Link14IoProps = useIoStore((state)=>state["Home"]["Link14"]);
const Link14Cb = useLink14Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Menu1Props = useStore((state)=>state["Home"]["Menu1"]);
const Menu1IoProps = useIoStore((state)=>state["Home"]["Menu1"]);
const Menu1Cb = useMenu1Cb()
const Link9Props = useStore((state)=>state["Home"]["Link9"]);
const Link9IoProps = useIoStore((state)=>state["Home"]["Link9"]);
const Link9Cb = useLink9Cb()
const Link10Props = useStore((state)=>state["Home"]["Link10"]);
const Link10IoProps = useIoStore((state)=>state["Home"]["Link10"]);
const Link10Cb = useLink10Cb()
const Link11Props = useStore((state)=>state["Home"]["Link11"]);
const Link11IoProps = useIoStore((state)=>state["Home"]["Link11"]);
const Link11Cb = useLink11Cb()
const Link12Props = useStore((state)=>state["Home"]["Link12"]);
const Link12IoProps = useIoStore((state)=>state["Home"]["Link12"]);
const Link12Cb = useLink12Cb()
const Link13Props = useStore((state)=>state["Home"]["Link13"]);
const Link13IoProps = useIoStore((state)=>state["Home"]["Link13"]);
const Link13Cb = useLink13Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Button5Props = useStore((state)=>state["Home"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["Home"]["Button5"]);
const Button5Cb = useButton5Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox223Props = useStore((state)=>state["Home"]["TextBox223"]);
const TextBox223IoProps = useIoStore((state)=>state["Home"]["TextBox223"]);
const TextBox223Cb = useTextBox223Cb()
const TextBox224Props = useStore((state)=>state["Home"]["TextBox224"]);
const TextBox224IoProps = useIoStore((state)=>state["Home"]["TextBox224"]);
const TextBox224Cb = useTextBox224Cb()
const TextBox225Props = useStore((state)=>state["Home"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Home"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox226Props = useStore((state)=>state["Home"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Home"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const TextBox227Props = useStore((state)=>state["Home"]["TextBox227"]);
const TextBox227IoProps = useIoStore((state)=>state["Home"]["TextBox227"]);
const TextBox227Cb = useTextBox227Cb()
const TextBox228Props = useStore((state)=>state["Home"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["Home"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox198Props = useStore((state)=>state["Home"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["Home"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const TextBox199Props = useStore((state)=>state["Home"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["Home"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const TextBox200Props = useStore((state)=>state["Home"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["Home"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox204Props = useStore((state)=>state["Home"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["Home"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const TextBox205Props = useStore((state)=>state["Home"]["TextBox205"]);
const TextBox205IoProps = useIoStore((state)=>state["Home"]["TextBox205"]);
const TextBox205Cb = useTextBox205Cb()
const TextBox206Props = useStore((state)=>state["Home"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["Home"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const TextBox207Props = useStore((state)=>state["Home"]["TextBox207"]);
const TextBox207IoProps = useIoStore((state)=>state["Home"]["TextBox207"]);
const TextBox207Cb = useTextBox207Cb()
const TextBox208Props = useStore((state)=>state["Home"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["Home"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const TextBox209Props = useStore((state)=>state["Home"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["Home"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox222Props = useStore((state)=>state["Home"]["TextBox222"]);
const TextBox222IoProps = useIoStore((state)=>state["Home"]["TextBox222"]);
const TextBox222Cb = useTextBox222Cb()
const TextBox219Props = useStore((state)=>state["Home"]["TextBox219"]);
const TextBox219IoProps = useIoStore((state)=>state["Home"]["TextBox219"]);
const TextBox219Cb = useTextBox219Cb()
const TextBox220Props = useStore((state)=>state["Home"]["TextBox220"]);
const TextBox220IoProps = useIoStore((state)=>state["Home"]["TextBox220"]);
const TextBox220Cb = useTextBox220Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox229Props = useStore((state)=>state["Home"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["Home"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox230Props = useStore((state)=>state["Home"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["Home"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const TextBox239Props = useStore((state)=>state["Home"]["TextBox239"]);
const TextBox239IoProps = useIoStore((state)=>state["Home"]["TextBox239"]);
const TextBox239Cb = useTextBox239Cb()
const TextBox241Props = useStore((state)=>state["Home"]["TextBox241"]);
const TextBox241IoProps = useIoStore((state)=>state["Home"]["TextBox241"]);
const TextBox241Cb = useTextBox241Cb()
const TextBox242Props = useStore((state)=>state["Home"]["TextBox242"]);
const TextBox242IoProps = useIoStore((state)=>state["Home"]["TextBox242"]);
const TextBox242Cb = useTextBox242Cb()
const TextBox243Props = useStore((state)=>state["Home"]["TextBox243"]);
const TextBox243IoProps = useIoStore((state)=>state["Home"]["TextBox243"]);
const TextBox243Cb = useTextBox243Cb()
const TextBox249Props = useStore((state)=>state["Home"]["TextBox249"]);
const TextBox249IoProps = useIoStore((state)=>state["Home"]["TextBox249"]);
const TextBox249Cb = useTextBox249Cb()
const TextBox250Props = useStore((state)=>state["Home"]["TextBox250"]);
const TextBox250IoProps = useIoStore((state)=>state["Home"]["TextBox250"]);
const TextBox250Cb = useTextBox250Cb()
const TextBox251Props = useStore((state)=>state["Home"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["Home"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const TextBox248Props = useStore((state)=>state["Home"]["TextBox248"]);
const TextBox248IoProps = useIoStore((state)=>state["Home"]["TextBox248"]);
const TextBox248Cb = useTextBox248Cb()
const Link16Props = useStore((state)=>state["Home"]["Link16"]);
const Link16IoProps = useIoStore((state)=>state["Home"]["Link16"]);
const Link16Cb = useLink16Cb()
const TextBox252Props = useStore((state)=>state["Home"]["TextBox252"]);
const TextBox252IoProps = useIoStore((state)=>state["Home"]["TextBox252"]);
const TextBox252Cb = useTextBox252Cb()
const TextBox253Props = useStore((state)=>state["Home"]["TextBox253"]);
const TextBox253IoProps = useIoStore((state)=>state["Home"]["TextBox253"]);
const TextBox253Cb = useTextBox253Cb()
const TextBox254Props = useStore((state)=>state["Home"]["TextBox254"]);
const TextBox254IoProps = useIoStore((state)=>state["Home"]["TextBox254"]);
const TextBox254Cb = useTextBox254Cb()
const TextBox255Props = useStore((state)=>state["Home"]["TextBox255"]);
const TextBox255IoProps = useIoStore((state)=>state["Home"]["TextBox255"]);
const TextBox255Cb = useTextBox255Cb()
const TextBox256Props = useStore((state)=>state["Home"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["Home"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const TextBox257Props = useStore((state)=>state["Home"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["Home"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const TextBox258Props = useStore((state)=>state["Home"]["TextBox258"]);
const TextBox258IoProps = useIoStore((state)=>state["Home"]["TextBox258"]);
const TextBox258Cb = useTextBox258Cb()
const TextBox259Props = useStore((state)=>state["Home"]["TextBox259"]);
const TextBox259IoProps = useIoStore((state)=>state["Home"]["TextBox259"]);
const TextBox259Cb = useTextBox259Cb()
const TextBox267Props = useStore((state)=>state["Home"]["TextBox267"]);
const TextBox267IoProps = useIoStore((state)=>state["Home"]["TextBox267"]);
const TextBox267Cb = useTextBox267Cb()
const TextBox268Props = useStore((state)=>state["Home"]["TextBox268"]);
const TextBox268IoProps = useIoStore((state)=>state["Home"]["TextBox268"]);
const TextBox268Cb = useTextBox268Cb()
const TextBox269Props = useStore((state)=>state["Home"]["TextBox269"]);
const TextBox269IoProps = useIoStore((state)=>state["Home"]["TextBox269"]);
const TextBox269Cb = useTextBox269Cb()
const TextBox270Props = useStore((state)=>state["Home"]["TextBox270"]);
const TextBox270IoProps = useIoStore((state)=>state["Home"]["TextBox270"]);
const TextBox270Cb = useTextBox270Cb()
const TextBox271Props = useStore((state)=>state["Home"]["TextBox271"]);
const TextBox271IoProps = useIoStore((state)=>state["Home"]["TextBox271"]);
const TextBox271Cb = useTextBox271Cb()
const TextBox272Props = useStore((state)=>state["Home"]["TextBox272"]);
const TextBox272IoProps = useIoStore((state)=>state["Home"]["TextBox272"]);
const TextBox272Cb = useTextBox272Cb()
const TEXTBOX273Props = useStore((state)=>state["Home"]["TEXTBOX273"]);
const TEXTBOX273IoProps = useIoStore((state)=>state["Home"]["TEXTBOX273"]);
const TEXTBOX273Cb = useTEXTBOX273Cb()
const TextBox274Props = useStore((state)=>state["Home"]["TextBox274"]);
const TextBox274IoProps = useIoStore((state)=>state["Home"]["TextBox274"]);
const TextBox274Cb = useTextBox274Cb()
const TLRProps = useStore((state)=>state["Home"]["TLR"]);
const TLRIoProps = useIoStore((state)=>state["Home"]["TLR"]);
const TLRCb = useTLRCb()
const TextBox275Props = useStore((state)=>state["Home"]["TextBox275"]);
const TextBox275IoProps = useIoStore((state)=>state["Home"]["TextBox275"]);
const TextBox275Cb = useTextBox275Cb()
const TextBox276Props = useStore((state)=>state["Home"]["TextBox276"]);
const TextBox276IoProps = useIoStore((state)=>state["Home"]["TextBox276"]);
const TextBox276Cb = useTextBox276Cb()
const TextBox277Props = useStore((state)=>state["Home"]["TextBox277"]);
const TextBox277IoProps = useIoStore((state)=>state["Home"]["TextBox277"]);
const TextBox277Cb = useTextBox277Cb()
const TextBox278Props = useStore((state)=>state["Home"]["TextBox278"]);
const TextBox278IoProps = useIoStore((state)=>state["Home"]["TextBox278"]);
const TextBox278Cb = useTextBox278Cb()
const TextBox279Props = useStore((state)=>state["Home"]["TextBox279"]);
const TextBox279IoProps = useIoStore((state)=>state["Home"]["TextBox279"]);
const TextBox279Cb = useTextBox279Cb()
const TextBox280Props = useStore((state)=>state["Home"]["TextBox280"]);
const TextBox280IoProps = useIoStore((state)=>state["Home"]["TextBox280"]);
const TextBox280Cb = useTextBox280Cb()
const TextBox281Props = useStore((state)=>state["Home"]["TextBox281"]);
const TextBox281IoProps = useIoStore((state)=>state["Home"]["TextBox281"]);
const TextBox281Cb = useTextBox281Cb()
const TextBox282Props = useStore((state)=>state["Home"]["TextBox282"]);
const TextBox282IoProps = useIoStore((state)=>state["Home"]["TextBox282"]);
const TextBox282Cb = useTextBox282Cb()
const TextBox283Props = useStore((state)=>state["Home"]["TextBox283"]);
const TextBox283IoProps = useIoStore((state)=>state["Home"]["TextBox283"]);
const TextBox283Cb = useTextBox283Cb()
const TextBox284Props = useStore((state)=>state["Home"]["TextBox284"]);
const TextBox284IoProps = useIoStore((state)=>state["Home"]["TextBox284"]);
const TextBox284Cb = useTextBox284Cb()
const TextBox288Props = useStore((state)=>state["Home"]["TextBox288"]);
const TextBox288IoProps = useIoStore((state)=>state["Home"]["TextBox288"]);
const TextBox288Cb = useTextBox288Cb()
const TextBox289Props = useStore((state)=>state["Home"]["TextBox289"]);
const TextBox289IoProps = useIoStore((state)=>state["Home"]["TextBox289"]);
const TextBox289Cb = useTextBox289Cb()
const TextBox290Props = useStore((state)=>state["Home"]["TextBox290"]);
const TextBox290IoProps = useIoStore((state)=>state["Home"]["TextBox290"]);
const TextBox290Cb = useTextBox290Cb()
const TextBox303Props = useStore((state)=>state["Home"]["TextBox303"]);
const TextBox303IoProps = useIoStore((state)=>state["Home"]["TextBox303"]);
const TextBox303Cb = useTextBox303Cb()
const TextBox304Props = useStore((state)=>state["Home"]["TextBox304"]);
const TextBox304IoProps = useIoStore((state)=>state["Home"]["TextBox304"]);
const TextBox304Cb = useTextBox304Cb()
const TextBox305Props = useStore((state)=>state["Home"]["TextBox305"]);
const TextBox305IoProps = useIoStore((state)=>state["Home"]["TextBox305"]);
const TextBox305Cb = useTextBox305Cb()
const TextBox307Props = useStore((state)=>state["Home"]["TextBox307"]);
const TextBox307IoProps = useIoStore((state)=>state["Home"]["TextBox307"]);
const TextBox307Cb = useTextBox307Cb()
const TextBox308Props = useStore((state)=>state["Home"]["TextBox308"]);
const TextBox308IoProps = useIoStore((state)=>state["Home"]["TextBox308"]);
const TextBox308Cb = useTextBox308Cb()
const TextBox309Props = useStore((state)=>state["Home"]["TextBox309"]);
const TextBox309IoProps = useIoStore((state)=>state["Home"]["TextBox309"]);
const TextBox309Cb = useTextBox309Cb()
const TextBox310Props = useStore((state)=>state["Home"]["TextBox310"]);
const TextBox310IoProps = useIoStore((state)=>state["Home"]["TextBox310"]);
const TextBox310Cb = useTextBox310Cb()
const TextBox311Props = useStore((state)=>state["Home"]["TextBox311"]);
const TextBox311IoProps = useIoStore((state)=>state["Home"]["TextBox311"]);
const TextBox311Cb = useTextBox311Cb()
const TextBox312Props = useStore((state)=>state["Home"]["TextBox312"]);
const TextBox312IoProps = useIoStore((state)=>state["Home"]["TextBox312"]);
const TextBox312Cb = useTextBox312Cb()
const TextBox306Props = useStore((state)=>state["Home"]["TextBox306"]);
const TextBox306IoProps = useIoStore((state)=>state["Home"]["TextBox306"]);
const TextBox306Cb = useTextBox306Cb()

  return (<>
  <Flex className="p-Home MainContainer bpt" {...MainContainerProps} {...MainContainerCb} {...MainContainerIoProps}>
<Flex className="p-Home NavbarCon bpt" {...NavbarConProps} {...NavbarConCb} {...NavbarConIoProps}>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Link className="p-Home Link9 bpt" {...Link9Props} {...Link9Cb} {...Link9IoProps}/>
<Link className="p-Home Link13 bpt" {...Link13Props} {...Link13Cb} {...Link13IoProps}/>
<Link className="p-Home Link12 bpt" {...Link12Props} {...Link12Cb} {...Link12IoProps}/>
<Link className="p-Home Link11 bpt" {...Link11Props} {...Link11Cb} {...Link11IoProps}/>
<Link className="p-Home Link10 bpt" {...Link10Props} {...Link10Cb} {...Link10IoProps}/>
</Flex>
<Menu className="p-Home Menu1 bpt" {...Menu1Props} {...Menu1Cb} {...Menu1IoProps}/>
</Flex>
<Flex className="p-Home Hero1Con bpt" {...Hero1ConProps} {...Hero1ConCb} {...Hero1ConIoProps}>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
<Link className="p-Home Link14 bpt" {...Link14Props} {...Link14Cb} {...Link14IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Flex>
<Flex className="p-Home TrustedByCon bpt" {...TrustedByConProps} {...TrustedByConCb} {...TrustedByConIoProps}>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Services bpt" {...ServicesProps} {...ServicesCb} {...ServicesIoProps}>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
</Flex>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Projects bpt" {...ProjectsProps} {...ProjectsCb} {...ProjectsIoProps}>
<Flex className="p-Home ProjectHeader bpt" {...ProjectHeaderProps} {...ProjectHeaderCb} {...ProjectHeaderIoProps}>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Flex>
<Flex className="p-Home ProjectTitle bpt" {...ProjectTitleProps} {...ProjectTitleCb} {...ProjectTitleIoProps}>
<Flex className="p-Home Heading bpt" {...HeadingProps} {...HeadingCb} {...HeadingIoProps}>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
</Flex>
<Button className="p-Home Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
</Flex>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Flex className="p-Home Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<Flex className="p-Home ProjectDetails bpt" {...ProjectDetailsProps} {...ProjectDetailsCb} {...ProjectDetailsIoProps}>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex144 bpt" {...Flex144Props} {...Flex144Cb} {...Flex144IoProps}>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<Flex className="p-Home Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<TextBox className="p-Home TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<TextBox className="p-Home TextBox224 bpt" {...TextBox224Props} {...TextBox224Cb} {...TextBox224IoProps}/>
<TextBox className="p-Home TextBox223 bpt" {...TextBox223Props} {...TextBox223Cb} {...TextBox223IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<Flex className="p-Home Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<TextBox className="p-Home TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
<TextBox className="p-Home TextBox227 bpt" {...TextBox227Props} {...TextBox227Cb} {...TextBox227IoProps}/>
<TextBox className="p-Home TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex210 bpt" {...Flex210Props} {...Flex210Cb} {...Flex210IoProps}/>
</Flex>
<Flex className="p-Home Blogs bpt" {...BlogsProps} {...BlogsCb} {...BlogsIoProps}>
<Flex className="p-Home BlogsCon bpt" {...BlogsConProps} {...BlogsConCb} {...BlogsConIoProps}>
<Flex className="p-Home BlogTitle bpt" {...BlogTitleProps} {...BlogTitleCb} {...BlogTitleIoProps}>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
</Flex>
<Flex className="p-Home BlogDetail bpt" {...BlogDetailProps} {...BlogDetailCb} {...BlogDetailIoProps}>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Flex>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<TextBox className="p-Home TextBox205 bpt" {...TextBox205Props} {...TextBox205Cb} {...TextBox205IoProps}/>
<TextBox className="p-Home TextBox204 bpt" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
<TextBox className="p-Home TextBox206 bpt" {...TextBox206Props} {...TextBox206Cb} {...TextBox206IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<TextBox className="p-Home TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
<TextBox className="p-Home TextBox207 bpt" {...TextBox207Props} {...TextBox207Cb} {...TextBox207IoProps}/>
<TextBox className="p-Home TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Flex className="p-Home Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<TextBox className="p-Home TextBox199 bpt" {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
<TextBox className="p-Home TextBox198 bpt" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
<TextBox className="p-Home TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home ProductDesigner bpt" {...ProductDesignerProps} {...ProductDesignerCb} {...ProductDesignerIoProps}>
<Flex className="p-Home ProductTop bpt" {...ProductTopProps} {...ProductTopCb} {...ProductTopIoProps}>
<Flex className="p-Home Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<TextBox className="p-Home TextBox219 bpt" {...TextBox219Props} {...TextBox219Cb} {...TextBox219IoProps}/>
<TextBox className="p-Home TextBox220 bpt" {...TextBox220Props} {...TextBox220Cb} {...TextBox220IoProps}/>
</Flex>
<Flex className="p-Home Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<TextBox className="p-Home TextBox222 bpt" {...TextBox222Props} {...TextBox222Cb} {...TextBox222IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home ImageCon bpt" {...ImageConProps} {...ImageConCb} {...ImageConIoProps}>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<Flex className="p-Home Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home EduWork bpt" {...EduWorkProps} {...EduWorkCb} {...EduWorkIoProps}>
<Flex className="p-Home EduCon bpt" {...EduConProps} {...EduConCb} {...EduConIoProps}>
<Flex className="p-Home Head bpt" {...HeadProps} {...HeadCb} {...HeadIoProps}>
<TextBox className="p-Home TextBox278 bpt" {...TextBox278Props} {...TextBox278Cb} {...TextBox278IoProps}/>
</Flex>
<Flex className="p-Home EduDetails bpt" {...EduDetailsProps} {...EduDetailsCb} {...EduDetailsIoProps}>
<Flex className="p-Home EduDetail bpt" {...EduDetailProps} {...EduDetailCb} {...EduDetailIoProps}>
<Flex className="p-Home UniName bpt" {...UniNameProps} {...UniNameCb} {...UniNameIoProps}>
<TextBox className="p-Home TextBox279 bpt" {...TextBox279Props} {...TextBox279Cb} {...TextBox279IoProps}/>
</Flex>
<Flex className="p-Home Course bpt" {...CourseProps} {...CourseCb} {...CourseIoProps}>
<TextBox className="p-Home TextBox281 bpt" {...TextBox281Props} {...TextBox281Cb} {...TextBox281IoProps}/>
<TextBox className="p-Home TextBox280 bpt" {...TextBox280Props} {...TextBox280Cb} {...TextBox280IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex221 bpt" {...Flex221Props} {...Flex221Cb} {...Flex221IoProps}>
<Flex className="p-Home Flex220 bpt" {...Flex220Props} {...Flex220Cb} {...Flex220IoProps}>
<TextBox className="p-Home TextBox284 bpt" {...TextBox284Props} {...TextBox284Cb} {...TextBox284IoProps}/>
</Flex>
<Flex className="p-Home Flex219 bpt" {...Flex219Props} {...Flex219Cb} {...Flex219IoProps}>
<TextBox className="p-Home TextBox282 bpt" {...TextBox282Props} {...TextBox282Cb} {...TextBox282IoProps}/>
<TextBox className="p-Home TextBox283 bpt" {...TextBox283Props} {...TextBox283Cb} {...TextBox283IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex227 bpt" {...Flex227Props} {...Flex227Cb} {...Flex227IoProps}>
<Flex className="p-Home Flex225 bpt" {...Flex225Props} {...Flex225Cb} {...Flex225IoProps}>
<TextBox className="p-Home TextBox288 bpt" {...TextBox288Props} {...TextBox288Cb} {...TextBox288IoProps}/>
</Flex>
<Flex className="p-Home Flex226 bpt" {...Flex226Props} {...Flex226Cb} {...Flex226IoProps}>
<TextBox className="p-Home TextBox290 bpt" {...TextBox290Props} {...TextBox290Cb} {...TextBox290IoProps}/>
<TextBox className="p-Home TextBox289 bpt" {...TextBox289Props} {...TextBox289Cb} {...TextBox289IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex245 bpt" {...Flex245Props} {...Flex245Cb} {...Flex245IoProps}>
<Flex className="p-Home Flex244 bpt" {...Flex244Props} {...Flex244Cb} {...Flex244IoProps}>
<TextBox className="p-Home TextBox306 bpt" {...TextBox306Props} {...TextBox306Cb} {...TextBox306IoProps}/>
</Flex>
<Flex className="p-Home Flex243 bpt" {...Flex243Props} {...Flex243Cb} {...Flex243IoProps}>
<Flex className="p-Home Flex242 bpt" {...Flex242Props} {...Flex242Cb} {...Flex242IoProps}>
<Flex className="p-Home Flex246 bpt" {...Flex246Props} {...Flex246Cb} {...Flex246IoProps}>
<Flex className="p-Home Flex239 bpt" {...Flex239Props} {...Flex239Cb} {...Flex239IoProps}>
<TextBox className="p-Home TextBox305 bpt" {...TextBox305Props} {...TextBox305Cb} {...TextBox305IoProps}/>
</Flex>
<Flex className="p-Home Flex238 bpt" {...Flex238Props} {...Flex238Cb} {...Flex238IoProps}>
<TextBox className="p-Home TextBox303 bpt" {...TextBox303Props} {...TextBox303Cb} {...TextBox303IoProps}/>
<TextBox className="p-Home TextBox304 bpt" {...TextBox304Props} {...TextBox304Cb} {...TextBox304IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex250 bpt" {...Flex250Props} {...Flex250Cb} {...Flex250IoProps}>
<Flex className="p-Home Flex249 bpt" {...Flex249Props} {...Flex249Cb} {...Flex249IoProps}>
<Flex className="p-Home Flex247 bpt" {...Flex247Props} {...Flex247Cb} {...Flex247IoProps}>
<TextBox className="p-Home TextBox307 bpt" {...TextBox307Props} {...TextBox307Cb} {...TextBox307IoProps}/>
</Flex>
<Flex className="p-Home Flex248 bpt" {...Flex248Props} {...Flex248Cb} {...Flex248IoProps}>
<TextBox className="p-Home TextBox309 bpt" {...TextBox309Props} {...TextBox309Cb} {...TextBox309IoProps}/>
<TextBox className="p-Home TextBox308 bpt" {...TextBox308Props} {...TextBox308Cb} {...TextBox308IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex254 bpt" {...Flex254Props} {...Flex254Cb} {...Flex254IoProps}>
<Flex className="p-Home Flex253 bpt" {...Flex253Props} {...Flex253Cb} {...Flex253IoProps}>
<Flex className="p-Home Flex251 bpt" {...Flex251Props} {...Flex251Cb} {...Flex251IoProps}>
<TextBox className="p-Home TextBox310 bpt" {...TextBox310Props} {...TextBox310Cb} {...TextBox310IoProps}/>
</Flex>
<Flex className="p-Home Flex252 bpt" {...Flex252Props} {...Flex252Cb} {...Flex252IoProps}>
<TextBox className="p-Home TextBox312 bpt" {...TextBox312Props} {...TextBox312Cb} {...TextBox312IoProps}/>
<TextBox className="p-Home TextBox311 bpt" {...TextBox311Props} {...TextBox311Cb} {...TextBox311IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Testomonial bpt" {...TestomonialProps} {...TestomonialCb} {...TestomonialIoProps}>
<Flex className="p-Home TestHead bpt" {...TestHeadProps} {...TestHeadCb} {...TestHeadIoProps}>
<TextBox className="p-Home TEXTBOX273 bpt" {...TEXTBOX273Props} {...TEXTBOX273Cb} {...TEXTBOX273IoProps}/>
<TextBox className="p-Home TextBox274 bpt" {...TextBox274Props} {...TextBox274Cb} {...TextBox274IoProps}/>
</Flex>
<Flex className="p-Home TCon bpt" {...TConProps} {...TConCb} {...TConIoProps}>
<Flex className="p-Home Flex205 bpt" {...Flex205Props} {...Flex205Cb} {...Flex205IoProps}>
<Image className="p-Home TLR bpt" {...TLRProps} {...TLRCb} {...TLRIoProps}/>
</Flex>
<Flex className="p-Home TRR bpt" {...TRRProps} {...TRRCb} {...TRRIoProps}>
<TextBox className="p-Home TextBox275 bpt" {...TextBox275Props} {...TextBox275Cb} {...TextBox275IoProps}/>
<Flex className="p-Home TRRBottom bpt" {...TRRBottomProps} {...TRRBottomCb} {...TRRBottomIoProps}>
<Flex className="p-Home Flex208 bpt" {...Flex208Props} {...Flex208Cb} {...Flex208IoProps}>
<TextBox className="p-Home TextBox277 bpt" {...TextBox277Props} {...TextBox277Cb} {...TextBox277IoProps}/>
<TextBox className="p-Home TextBox276 bpt" {...TextBox276Props} {...TextBox276Cb} {...TextBox276IoProps}/>
</Flex>
<Flex className="p-Home Flex209 bpt" {...Flex209Props} {...Flex209Cb} {...Flex209IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home BlackBG bpt" {...BlackBGProps} {...BlackBGCb} {...BlackBGIoProps}>
<Flex className="p-Home FAQCON bpt" {...FAQCONProps} {...FAQCONCb} {...FAQCONIoProps}>
<Flex className="p-Home FAQHEAD bpt" {...FAQHEADProps} {...FAQHEADCb} {...FAQHEADIoProps}>
<TextBox className="p-Home TextBox230 bpt" {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
<TextBox className="p-Home TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
</Flex>
<Flex className="p-Home AllQues bpt" {...AllQuesProps} {...AllQuesCb} {...AllQuesIoProps}>
<Flex className="p-Home QR1 bpt" {...QR1Props} {...QR1Cb} {...QR1IoProps}>
<Flex className="p-Home Flex176 bpt" {...Flex176Props} {...Flex176Cb} {...Flex176IoProps}>
<TextBox className="p-Home TextBox243 bpt" {...TextBox243Props} {...TextBox243Cb} {...TextBox243IoProps}/>
</Flex>
<Flex className="p-Home Flex170 bpt" {...Flex170Props} {...Flex170Cb} {...Flex170IoProps}>
<Flex className="p-Home Flex169 bpt" {...Flex169Props} {...Flex169Cb} {...Flex169IoProps}>
<TextBox className="p-Home TextBox239 bpt" {...TextBox239Props} {...TextBox239Cb} {...TextBox239IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex174 bpt" {...Flex174Props} {...Flex174Cb} {...Flex174IoProps}>
<TextBox className="p-Home TextBox241 bpt" {...TextBox241Props} {...TextBox241Cb} {...TextBox241IoProps}/>
</Flex>
<Flex className="p-Home Flex175 bpt" {...Flex175Props} {...Flex175Cb} {...Flex175IoProps}>
<TextBox className="p-Home TextBox242 bpt" {...TextBox242Props} {...TextBox242Cb} {...TextBox242IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home QR2 bpt" {...QR2Props} {...QR2Cb} {...QR2IoProps}>
<Flex className="p-Home Flex184 bpt" {...Flex184Props} {...Flex184Cb} {...Flex184IoProps}>
<TextBox className="p-Home TextBox249 bpt" {...TextBox249Props} {...TextBox249Cb} {...TextBox249IoProps}/>
</Flex>
<Flex className="p-Home Flex187 bpt" {...Flex187Props} {...Flex187Cb} {...Flex187IoProps}>
<Flex className="p-Home Flex183 bpt" {...Flex183Props} {...Flex183Cb} {...Flex183IoProps}>
<TextBox className="p-Home TextBox248 bpt" {...TextBox248Props} {...TextBox248Cb} {...TextBox248IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex186 bpt" {...Flex186Props} {...Flex186Cb} {...Flex186IoProps}>
<TextBox className="p-Home TextBox251 bpt" {...TextBox251Props} {...TextBox251Cb} {...TextBox251IoProps}/>
</Flex>
<Flex className="p-Home Flex185 bpt" {...Flex185Props} {...Flex185Cb} {...Flex185IoProps}>
<TextBox className="p-Home TextBox250 bpt" {...TextBox250Props} {...TextBox250Cb} {...TextBox250IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Footer bpt" {...FooterProps} {...FooterCb} {...FooterIoProps}>
<Flex className="p-Home Foothead bpt" {...FootheadProps} {...FootheadCb} {...FootheadIoProps}>
<TextBox className="p-Home TextBox253 bpt" {...TextBox253Props} {...TextBox253Cb} {...TextBox253IoProps}/>
<TextBox className="p-Home TextBox252 bpt" {...TextBox252Props} {...TextBox252Cb} {...TextBox252IoProps}/>
</Flex>
<Flex className="p-Home AllLinks bpt" {...AllLinksProps} {...AllLinksCb} {...AllLinksIoProps}>
<Flex className="p-Home LR bpt" {...LRProps} {...LRCb} {...LRIoProps}>
<TextBox className="p-Home TextBox254 bpt" {...TextBox254Props} {...TextBox254Cb} {...TextBox254IoProps}/>
<TextBox className="p-Home TextBox255 bpt" {...TextBox255Props} {...TextBox255Cb} {...TextBox255IoProps}/>
<TextBox className="p-Home TextBox256 bpt" {...TextBox256Props} {...TextBox256Cb} {...TextBox256IoProps}/>
</Flex>
<Flex className="p-Home RR bpt" {...RRProps} {...RRCb} {...RRIoProps}>
<Flex className="p-Home R1 bpt" {...R1Props} {...R1Cb} {...R1IoProps}>
<TextBox className="p-Home TextBox258 bpt" {...TextBox258Props} {...TextBox258Cb} {...TextBox258IoProps}/>
<TextBox className="p-Home TextBox259 bpt" {...TextBox259Props} {...TextBox259Cb} {...TextBox259IoProps}/>
<TextBox className="p-Home TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
</Flex>
<Flex className="p-Home Flex200 bpt" {...Flex200Props} {...Flex200Cb} {...Flex200IoProps}>
<TextBox className="p-Home TextBox268 bpt" {...TextBox268Props} {...TextBox268Cb} {...TextBox268IoProps}/>
<TextBox className="p-Home TextBox267 bpt" {...TextBox267Props} {...TextBox267Cb} {...TextBox267IoProps}/>
<TextBox className="p-Home TextBox269 bpt" {...TextBox269Props} {...TextBox269Cb} {...TextBox269IoProps}/>
</Flex>
<Flex className="p-Home Flex201 bpt" {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<TextBox className="p-Home TextBox271 bpt" {...TextBox271Props} {...TextBox271Cb} {...TextBox271IoProps}/>
<TextBox className="p-Home TextBox270 bpt" {...TextBox270Props} {...TextBox270Cb} {...TextBox270IoProps}/>
<TextBox className="p-Home TextBox272 bpt" {...TextBox272Props} {...TextBox272Cb} {...TextBox272IoProps}/>
</Flex>
</Flex>
</Flex>
<Link className="p-Home Link16 bpt" {...Link16Props} {...Link16Cb} {...Link16IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}
