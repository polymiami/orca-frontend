import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from '@orcinuslabs/uikit'
import { NavLink } from 'react-router-dom'
import Chart from 'kaktana-react-lightweight-charts'



const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  transition: opacity 200ms;
  &:hover {
    opacity: 0.65;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`

const WinCard = () => {
  const [currState, setCurrState] = useState({
    options: {
        alignLabels: true,
        timeScale: {
          rightOffset: 12,
          barSpacing: 3,
          fixLeftEdge: true,
          lockVisibleTimeRangeOnResize: true,
          rightBarStaysOnScroll: true,
          borderVisible: false,
          borderColor: "#fff000",
          visible: true,
          timeVisible: true,
          secondsVisible: false
        },
        grid: {
            vertLines: {
                visible: false,
            },
            horzLines: {
                visible: false,
            },
        },
        // layout: {
        //     backgroundColor: '#FAEBD7',
        //     textColor: '#696969',
        //     fontSize: 12,
        //     fontFamily: 'Calibri',
        // },
    },
    candlestickSeries: [{
        data: [
          { time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85 },
          { time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75 },
          { time: '2018-10-23', open: 175.77, high: 179.49, low: 175.44, close: 178.53 },
          { time: '2018-10-24', open: 178.58, high: 182.37, low: 176.31, close: 176.97 },
          { time: '2018-10-25', open: 177.52, high: 180.50, low: 176.83, close: 179.07 },
          { time: '2018-10-26', open: 176.88, high: 177.34, low: 170.91, close: 172.23 },
          { time: '2018-10-29', open: 173.74, high: 175.99, low: 170.95, close: 173.20 },
          { time: '2018-10-30', open: 173.16, high: 176.43, low: 172.64, close: 176.24 },
          { time: '2018-10-31', open: 177.98, high: 178.85, low: 175.59, close: 175.88 },
          { time: '2018-11-01', open: 176.84, high: 180.86, low: 175.90, close: 180.46 },
          { time: '2018-11-02', open: 182.47, high: 183.01, low: 177.39, close: 179.93 },
          { time: '2018-11-05', open: 181.02, high: 182.41, low: 179.30, close: 182.19 }
        ]
    }],
    lineSeries: [{
        data: [
            { time: '2018-12-01', value: 32.51 },
            { time: '2018-12-02', value: 31.11 },
            { time: '2018-12-03', value: 27.02 },
            { time: '2018-12-04', value: 27.32 },
            { time: '2018-12-05', value: 25.17 },
            { time: '2018-12-06', value: 28.89 },
            { time: '2018-12-07', value: 25.46 },
            { time: '2018-12-08', value: 23.92 },
            { time: '2018-12-09', value: 22.68 },
            { time: '2018-12-10', value: 22.67 },
            { time: '2018-12-11', value: 27.57 },
            { time: '2018-12-12', value: 24.11 },
            { time: '2018-12-13', value: 30.74 },
        ]
    }],
    areaSeries: [{
        options: {
            topColor: 'rgba(35, 49, 66, 0.25)',
            bottomColor: 'rgba(35, 49, 66, 0.75)',
            lineColor: '#233142',
            lineStyle: 0,
            lineWidth: 3,
            crosshairMarkerVisible: false,
            crosshairMarkerRadius: 0,
            crosshairMarkerBorderColor: 'rgb(255, 255, 255, 1)',
            crosshairMarkerBackgroundColor: '#354a63',
        },
        data: [
            { time: '2018-12-01', value: 32.51 },
            { time: '2018-12-02', value: 31.11 },
            { time: '2018-12-03', value: 27.02 },
            { time: '2018-12-04', value: 27.32 },
            { time: '2018-12-05', value: 25.17 },
            { time: '2018-12-06', value: 28.89 },
            { time: '2018-12-07', value: 25.46 },
            { time: '2018-12-08', value: 23.92 },
            { time: '2018-12-09', value: 22.68 },
            { time: '2018-12-10', value: 22.67 },
            { time: '2018-12-11', value: 27.57 },
            { time: '2018-12-12', value: 24.11 },
            { time: '2018-12-13', value: 30.74 },
        ]
    }],
  })

  return (
    <StyledFarmStakingCard>
        <CardBody>
            <div>
                {/* <Chart options={currState.options} candlestickSeries={currState.candlestickSeries} autoWidth height={200} /> */}
                {/* <Chart options={currState.options} lineSeries={currState.lineSeries} autoWidth height={200} /> */}
                <Chart options={currState.options} areaSeries={currState.areaSeries} autoWidth height={200} />
            </div>
            
        </CardBody>
    </StyledFarmStakingCard>
  )
}

export default WinCard
