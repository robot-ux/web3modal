import React from 'react'
import styled from 'styled-components'
import { supportedChains, IChainData } from './chains';

export type IConnectButtonProps = {
  chainId: number;
  render?: (data: IChainData) => React.ReactNode;
}

const StyledPanel = styled.div`
  display: flex;
`;

const getChainMeta = (chainId: number) => {
  const chain = supportedChains.find(item => item.chainId === Number(chainId))

  if (chain) return chain

  return {
    chainId,
    name: 'Unknown',
  } as IChainData
}

export const ConnectButton = (props: IConnectButtonProps) => {
  const { chainId, render } = props
  const chainInfo = getChainMeta(chainId)

  if (render) {
    return render(chainInfo);
  }

  return (
    <StyledPanel>
      <img src={chainInfo.logo} />
      <div>{chainInfo.name}</div>
    </StyledPanel>
  );

}
