import { usePriceOrcaUsdc } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalOrca = getBalanceNumber(totalRewards)
  const orcaPriceBusd = usePriceOrcaUsdc()

  return totalOrca * orcaPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
