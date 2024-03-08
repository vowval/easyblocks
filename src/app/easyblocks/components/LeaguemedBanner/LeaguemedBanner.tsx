import { ReactElement } from "react";

type LeaguemedBannerProps = {
  Root: ReactElement;
  Title: ReactElement;
  Description: ReactElement;
  Wrapper: ReactElement;
  Buttons: ReactElement[];
  ButtonsWrapper: ReactElement
}

export function LeaguemedBanner(props: LeaguemedBannerProps) {
  const { Root, Title, Description, Wrapper, Buttons, ButtonsWrapper } = props;

  return (
    <Root.type {...Root.props}>
      <Wrapper.type {...Wrapper.props}>
        <Title.type {...Title.props} />
        <Description.type {...Description.props} />
        <ButtonsWrapper.type {...ButtonsWrapper.props}>
          {Buttons.map((Button, index) => <Button.type {...Button.props} key={index} />)}
        </ButtonsWrapper.type>
      </Wrapper.type>
    </Root.type>
  )
}