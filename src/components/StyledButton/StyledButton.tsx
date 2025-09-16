import styled from "@emotion/styled"
import type { ReactNode } from "react"

interface StyledButtonPropos{
  children: ReactNode
}

const StyledButton: React.FC<StyledButtonPropos> = ({children}) => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width:"100%",
        color: theme.palette.primary.contrastText,
        display:"inline-flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            border: "none",
        }

  }))

  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  )
}

export default StyledButton