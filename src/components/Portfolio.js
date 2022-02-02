import react from "react";

//mui components
import {Card, MobileStepper, Button, Box, Typography} from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { useTheme } from "@mui/material/styles"

//images
import BudgetTracker from "../assets/BudgetTracker.PNG"
import ClearSky from "../assets/ClearSky.PNG"
import codeShare from "../assets/codeShare.PNG"
import FiveStarLocal from "../assets/FiveStarLocal.PNG"
import GoogleBooks from "../assets/GoogleBooks.PNG"
import TechBlog from "../assets/TechBlog.PNG"

const steps = [
    { 
        label: "Test1",
        picture: BudgetTracker
    },
    {
        label: "Test2",
        picture: ClearSky
    },
    {
        label: "Test3",
        picture: codeShare
    },
    {
        label: "Test4",
        picture: FiveStarLocal
    },
    {
        label: "Test5",
        picture: GoogleBooks
    },
    {
        label: "Test6",
        picture: TechBlog
    }
];



function Portfolio(){

    const [activeStep, setActiveStep] = react.useState(0);

    const theme = useTheme()

    const maxSteps = steps.length

    const handleNext = () => {
        setActiveStep((prevActiveStep) =>{
            return (prevActiveStep === maxSteps - 1) ? 0 : prevActiveStep + 1
        })
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) =>{
            return (prevActiveStep === 0) ? 0 : prevActiveStep -1
        })
    }
    
    return (
        <Box>
            <Typography>{steps[activeStep].label}</Typography>
            <Card>
                <img src={steps[activeStep].picture}/>
            </Card>

            <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
        </Box>
    )

}

export default Portfolio