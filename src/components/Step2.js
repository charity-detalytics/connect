import React from 'react'
import { toSrcFromName } from '../assets'

export default class Step extends React.Component {
  render() {
    const { width } = this.props

    return (
      <div style={{
        padding: 10,
        // width: width < 500 ? 400 : '100%',
        // background: 'red',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
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
            marginRight: width < 400 ? 16 : 26,
          }}>
            2
          </div>
          <div style={{
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: 18,
            color: 'white',
            width: 290,
            width: width < 400 ? (width - 80) : 290,
          }}>
            Choose 'Connect to Service' from 42 'User Profile'
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            marginTop: 20,
          }}>
            <img
              width={162}
              height={300}
              srcSet={toSrcFromName('connect-to-service')}
            />
          </div>
        </div>
      </div>
    )
  }
}
