import styled from "@emotion/styled"

const StyledButton = () => {

    const StyledButton = styled("button")(({theme})=> ({
        backgroundColor: "transparent",
        borderRadius: "3px",
        padding: "5px 15px",
        width:"100%",
        border: `{1px solid ${theme.palette.primary.contrastText}`
  }))

  return (
    <>
      <StyledButton>Texto</StyledButton>
    </>
  )
}

export default StyledButton