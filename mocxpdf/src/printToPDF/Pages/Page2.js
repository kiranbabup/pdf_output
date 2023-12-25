import { Box } from "@mui/material";
import page2png from "../Assets/images/page2header.png";
import Footer from "../Components/Footer";
import HeaderComponent from "../Components/HeaderComponent";
import { ApageRenderingBox, aFullPdfPage } from "../Assets/data/styling";

const Page2 = ({id,firstName, lastName,}) => {
    return (
        <Box style={aFullPdfPage}>
            <HeaderComponent pngImage={page2png}/>
            <Box style={ApageRenderingBox}>

            </Box>
            <Footer  id={id} firstName={firstName} lastName={lastName} />
        </Box>
    )
}
export default Page2;