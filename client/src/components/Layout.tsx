import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { AppBar, Link as LinkM, Button, Box } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = (props) => {
  const { children, title = 'This is the default title' } = props;
  const classes = useStyles(props);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Box className={classes.container}>
        <AppBar position='static' className={classes.appBar}>
          <ul className={classes.linksUL}>
            <Link href='/'>
              <LinkM variant='overline' underline='none' className={classes.linkStyle}>
                HOME
              </LinkM>
            </Link>
            <Link href='/documentation'>
              <LinkM variant='overline' underline='none' className={classes.linkStyle}>
                DOCUMENTATION
              </LinkM>
            </Link>
            <Link href='/about'>
              <LinkM variant='overline' underline='none' className={classes.linkStyle}>
                ABOUT
              </LinkM>
            </Link>
          </ul>
          <ul className={classes.loginButton}>
            <LinkM variant='overline' underline='none'>
              <Button variant='outlined' size='small'>
                SIGN IN WITH
                <GitHubIcon style={{ fontSize: 'large', marginLeft: '8px' }}></GitHubIcon>
              </Button>
            </LinkM>
          </ul>
        </AppBar>
      </Box>
      {children}
    </>
  );
};

export default Layout;

const useStyles = makeStyles(() => ({
  appBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: 'black',
    padding: '25px',

    margin: '0 10%',
  },
  linksUL: {
    display: 'flex',
    padding: 0,
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: '#7209b7',
    },
    padding: '5px',
  },
  loginButton: {
    display: 'flex',
    alignItems: 'center',
    margin: '0px',
    padding: '0px',
    '&:hover': {
      color: '#7209b7',
      backgroundColor: 'black',
    },
  },
}));