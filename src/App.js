import React from 'react'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
    }
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    const { width, height } = window.screen
    this.setState({
      width,
      height,
    })
  }

  render() {
    let { width, height } = this.state
    if (Math.abs(window.orientation) === 90) {
      let tem = width
      width = height
      height = tem
    }

    let { orgName, logo } = window
    if (!orgName) {
      orgName = 'our Partner'
    }


    return (
      <div style={{
        backgroundImage: 'url(/static/images/background.png)',
        minHeight: height,
        backgroundColor: 'rgb(24, 26, 34)',
        paddingBottom: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div>
          {logo && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 30,
              paddingBottom: 20,
            }}>
              <img
                src={logo}
                style={{
                  maxWidth: 200,
                }}
              />
            </div>
          )}
          <div style={{
            maxWidth: 726,
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: 36,
            color: 'white',
            textAlign: 'center',
            marginBottom: 42,
            paddingTop: 36,
          }}>
            {'Scan the QR code from 42 App to connect to ' + orgName + '!'}
          </div>
          {width > 800 ? (
            <div>
              <div style={{
                display: 'flex',
              }}>
                <div style={{
                  width: 380,
                }}>
                  <Step1 width={width}/>
                </div>
                <div style={{
                  marginLeft: 40,
                  width: 380,
                }}>
                  <Step2 width={width}/>
                </div>
              </div>
              <div style={{
                display: 'flex',
                marginTop: 40,
              }}>
                <div style={{
                  width: 380,
                }}>
                  <Step3 width={width}/>
                </div>
                <div style={{
                  marginLeft: 40,
                  width: 380,
                }}>
                  <Step4 width={width}/>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Step1 width={width}/>
              <div style={{
                marginTop: 20,
              }}>
                <Step2 width={width}/>
              </div>
              <div style={{
                marginTop: 20,
              }}>
                <Step3 width={width}/>
              </div>
              <div style={{
                marginTop: 20,
              }}>
                <Step4 width={width}/>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
