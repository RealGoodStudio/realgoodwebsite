import React, { Component } from 'react';
import {
  Div,
  P,
  Span,
  A,
  Img,
  H2
} from 'glamorous';
import logo from './logo.svg';
import styles from './styles';

export class HomeUI extends Component {
  render() {
    return (
      <Div {...styles.container}>
        <Div {...styles.content}>
          <Img {...styles.icon} src={logo} alt="logo" />
          <Div {...styles.bio}>
            <P>
              <Span {...styles.bold}>Real Good </Span>
              is an east-coast collective.
            </P>
            <P>
            Now accepting freelance, contract, & pro-bono work.
            </P>
          </Div>
          <Div {...styles.signature}>
            <H2>-- signed</H2>
            <H2>
              <A href="https://www.instagram.com/vincentnoob/" {...styles.link}>@vincentnoob</A>
              <Span>, </Span>
              <A href="https://www.instagram.com/amhid.kahuna/" {...styles.link}>@amhid_kahuna</A>
            </H2>
          </Div>
        </Div>
      </Div>
    );
  }
}
