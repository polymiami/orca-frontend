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

const Charts = () => {
  const [currState, setCurrState] = useState({
    options: {
        alignLabels: true,
        timeScale: {
          rightOffset: 0,
          barSpacing: 1,
          fixLeftEdge: true,
          lockVisibleTimeRangeOnResize: true,
          rightBarStaysOnScroll: true,
          borderVisible: false,
          borderColor: "#fff000",
          visible: true,
          timeVisible: true,
          secondsVisible: false,
        },
        priceScale: {
            autoScale: false,
            alignLabels: false,
            borderVisible: false,
            borderColor: '#555ffd',
            scaleMargins: {
                top: 0.2,
                bottom: 0.0,
            },
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
            priceFormat: {
                type: 'price',
                precision: 3,
                minMove: 0.001,
            },
        },
        data: [
            { time: 1622527200, value: 0.03751979 },
            { time: 1622505600, value: 0.03798016 },
            { time: 1622484000, value: 0.03731374 },
            { time: 1622462400, value: 0.03740853 },
            { time: 1622440800, value: 0.03744115 },
            { time: 1622419200, value: 0.03750127 },
            { time: 1622397600, value: 0.03792701 },
            { time: 1622376000, value: 0.03747370 },
            { time: 1622354400, value: 0.03631959 },
            { time: 1622332800, value: 0.03416911 },
            { time: 1622311200, value: 0.03562026 },
            { time: 1622289600, value: 0.03757928 },
            { time: 1622268000, value: 0.03803312 },
            { time: 1622246400, value: 0.03757250 },
            { time: 1622224800, value: 0.03991311 },
            { time: 1622203200, value: 0.03579557 },
            { time: 1622181600, value: 0.03482912 },
            { time: 1622160000, value: 0.03736554 },
            { time: 1622138400, value: 0.03502022 },
            { time: 1622116800, value: 0.03560174 },
            { time: 1622095200, value: 0.04035966 },
            { time: 1622073600, value: 0.03964598 },
            { time: 1622052000, value: 0.04036601 },
            { time: 1622030400, value: 0.04046962 },
            { time: 1622008800, value: 0.03837671 },
            { time: 1621987200, value: 0.03772981 },
            { time: 1621965600, value: 0.03612310 },
            { time: 1621944000, value: 0.03588884 },
            { time: 1621922400, value: 0.03706489 },
            { time: 1621900800, value: 0.04143757 },
            { time: 1621879200, value: 0.04129278 },
            { time: 1621857600, value: 0.03952752 },
            { time: 1621836000, value: 0.03817330 },
            { time: 1621814400, value: 0.03441273 },
            { time: 1621792800, value: 0.03358199 },
            { time: 1621771200, value: 0.04161804 },
            { time: 1621749600, value: 0.04403145 },
            { time: 1621728000, value: 0.04345255 },
            { time: 1621706400, value: 0.04419544 },
            { time: 1621684800, value: 0.04203169 },
            { time: 1621663200, value: 0.04476411 },
            { time: 1621641600, value: 0.04942656 },
            { time: 1621620000, value: 0.05673565 },
            { time: 1621598400, value: 0.09503504 },
            { time: 1621576800, value: 0.13943327 },
            { time: 1621555200, value: 0.12701690 },
            { time: 1621533600, value: 0.14672515 },
            { time: 1621512000, value: 0.09398225 },
            { time: 1621490400, value: 0.09195908 },
            { time: 1621468800, value: 0.07845259 },
            { time: 1621447200, value: 0.07349348 },
            { time: 1621425600, value: 0.07016943 },
            { time: 1621404000, value: 0.06657693 },
            { time: 1621382400, value: 0.06138281 },
            { time: 1621360800, value: 0.05708477 },
            { time: 1621339200, value: 0.04993860 },
            { time: 1621317600, value: 0.04668642 },
            { time: 1621296000, value: 0.04639781 },
            { time: 1621274400, value: 0.06037827 },
            { time: 1621252800, value: 0.06232973 },
            { time: 1621231200, value: 0.04932381 },
            { time: 1621209600, value: 0.14905595 },
            { time: 1621188000, value: 0.04326493 },
            { time: 1621166400, value: 0.03452227 },
            { time: 1621144800, value: 0.02985475 },
            { time: 1621123200, value: 0.02914436 },
            { time: 1621101600, value: 0.02494836 },
            { time: 1621080000, value: 0.02396253 },
            { time: 1621058400, value: 0.00778281 },
            { time: 1621036800, value: 0.01476560 },
            { time: 1621015200, value: 0.00519735 },
            { time: 1620993600, value: 0.00151316 },
            { time: 1620972000, value: 0.00025960 },
            { time: 1620950400, value: 0.00007130 },
            { time: 1620928800, value: 0.00006570 }
        ]
    }],
  })

  return (
    <StyledFarmStakingCard>
        <CardBody>
            <div>
                {/* <Chart options={currState.options} candlestickSeries={currState.candlestickSeries} autoWidth height={200} /> */}
                {/* <Chart options={currState.options} lineSeries={currState.lineSeries} autoWidth height={200} /> */}
                <Chart options={currState.options} areaSeries={currState.areaSeries} autoWidth height={400} from={1620928800} to={1622527200} />
            </div>
            
        </CardBody>
    </StyledFarmStakingCard>
  )
}

export default Charts
