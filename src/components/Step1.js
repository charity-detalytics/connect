import React from 'react'
import { toSrcFromName } from '../assets'

export default class Step extends React.Component {
  render() {
    const { width } = this.props

    return (
      <div style={{
        padding: 10,
          // padding: width < 400 ? 50 : 10,
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <div style={{
            borderRadius: 20,
            width: 40,
            height: 40,
            backgroundColor: '#50dbe9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: 18,
          }}>
            1
          </div>
          <div style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
          }}>
            <img
              width={120}
              height={120}
              srcSet={toSrcFromName('detalytics42')}
            />
          </div>
          <div style={{
            width: 40,
            height: 40,
          }}/>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: 18,
            color: 'white',
            marginTop: 22,
          }}>
            Download 42 App from:
          </div>
          <a href='https://itunes.apple.com/app/apple-store/id1222486259?mt=8'>
            <div style={{
              marginTop: 24,
            }}>
              <img
                width={125}
                height={41}
                srcSet={toSrcFromName('appstore')}
              />
            </div>
          </a>
          <a href='https://play.google.com/store/apps/details?id=com.detalytics'>
            <div style={{
              marginTop: 16
            }}>
              <img
                width={125}
                height={41}
                srcSet={toSrcFromName('playstore')}
              />
            </div>
          </a>
          <div style={{
            fontFamily: 'Open Sans',
            fontWeight: 400,
            fontSize: 14,
            color: '#babedb',
            marginTop: 15,
            width: width < 400 ? (width - 120) : 318,
            textAlign: 'center'
          }}>
            Please note that 42 is a subscription-based application,  you would need a valid access code in order to use the application and it's services.
          </div>
        </div>
      </div>
    )
  }
}
