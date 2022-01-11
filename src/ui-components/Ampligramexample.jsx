/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Ampligram from "./Ampligram";
import {
  Card,
  Flex,
  Icon,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
import SideBar from "./SideBar";
export default function Ampligramexample(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1440px"
      height="2400px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245.00000059604645,245.00000059604645,245.00000059604645,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Flex
        gap="0"
        direction="column"
        width="864px"
        position="absolute"
        left="436px"
        top="-276px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Flex[0]")}
      >
        <Card
          padding="0px 0px 0px 0px"
          display="flex"
          width="864px"
          shrink="0"
          variation="default"
          {...getOverrideProps(overrides, "View.Flex[0].Card[0]")}
        >
          <Ampligram
            display="flex"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            {...getOverrideProps(
              overrides,
              "View.Flex[0].Card[0].Ampligram[0]"
            )}
          ></Ampligram>
        </Card>
        <Card
          padding="0px 0px 0px 0px"
          display="flex"
          width="864px"
          shrink="0"
          variation="default"
          {...getOverrideProps(overrides, "View.Flex[0].Card[1]")}
        >
          <Ampligram
            display="flex"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            {...getOverrideProps(
              overrides,
              "View.Flex[0].Card[1].Ampligram[0]"
            )}
          ></Ampligram>
        </Card>
        <Card
          padding="0px 0px 0px 0px"
          display="flex"
          width="864px"
          shrink="0"
          variation="default"
          {...getOverrideProps(overrides, "View.Flex[0].Card[2]")}
        >
          <Ampligram
            display="flex"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            {...getOverrideProps(
              overrides,
              "View.Flex[0].Card[2].Ampligram[0]"
            )}
          ></Ampligram>
        </Card>
        <Card
          padding="0px 0px 0px 0px"
          display="flex"
          width="864px"
          shrink="0"
          variation="default"
          {...getOverrideProps(overrides, "View.Flex[0].Card[3]")}
        >
          <Ampligram
            display="flex"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            {...getOverrideProps(
              overrides,
              "View.Flex[0].Card[3].Ampligram[0]"
            )}
          ></Ampligram>
        </Card>
      </Flex>
      <Flex
        gap="568px"
        direction="row"
        width="1440px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        left="0px"
        top="0px"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "View.Flex[1]")}
      >
        <Flex
          gap="32px"
          direction="row"
          width="1376px"
          justifyContent="flex-end"
          alignItems="center"
          grow="1"
          basis="1376px"
          height="40px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.Flex[1].Flex[0]")}
        >
          <View
            width="120px"
            height="40px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
            {...getOverrideProps(overrides, "View.Flex[1].Flex[0].View[0]")}
          ></View>
          <SearchField
            display="flex"
            width="300px"
            shrink="0"
            height="32px"
            size="default"
            labelHidden="true"
            variation="default"
            {...getOverrideProps(
              overrides,
              "View.Flex[1].Flex[0].SearchField[0]"
            )}
          ></SearchField>
          <Flex
            gap="40px"
            direction="row"
            width="820px"
            alignItems="center"
            grow="1"
            basis="820px"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "View.Flex[1].Flex[0].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Home"
              {...getOverrideProps(
                overrides,
                "View.Flex[1].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="About"
              {...getOverrideProps(
                overrides,
                "View.Flex[1].Flex[0].Flex[0].Text[1]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Pricing"
              {...getOverrideProps(
                overrides,
                "View.Flex[1].Flex[0].Flex[0].Text[2]"
              )}
            ></Text>
          </Flex>
          <Icon
            width="40px"
            height="40px"
            pathData="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
            viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
            color="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "View.Flex[1].Flex[0].Icon[0]")}
          ></Icon>
        </Flex>
      </Flex>
      <SideBar
        width="412px"
        height="2312px"
        position="absolute"
        display="flex"
        left="0px"
        top="88px"
        {...getOverrideProps(overrides, "View.SideBar[0]")}
      ></SideBar>
    </View>
  );
}
