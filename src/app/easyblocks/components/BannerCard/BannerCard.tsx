import React from "react";

export function BannerCard(props: any) {
  const {
    Container,
    Root,
    Stack,
    StackContainer,
    StackInnerContainer,
    CoverContainer,
    CoverCard,
  } = props;

  return (
    <Root.type {...Root.props}>
      <Container.type {...Container.props}>
        <CoverContainer.type {...CoverContainer.props}>
          <CoverCard.type {...CoverCard.props} />
        </CoverContainer.type>
        <StackContainer.type {...StackContainer.props}>
          <StackInnerContainer.type {...StackInnerContainer.props}>
            <Stack.type {...Stack.props} />
          </StackInnerContainer.type>
        </StackContainer.type>
      </Container.type>
    </Root.type>
  );
}
