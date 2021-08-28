import CompanySelectionEnum from 'src/company/selections';
import FactionSelectionEnum from 'src/faction/selections';
import ItemMarketSelectionEnum from 'src/item-market/selections';
import PropertySelectionEnum from 'src/property/selections';
import TornSelectionEnum from 'src/torn/selections';
import UserSelectionEnum from 'src/user/selections';

export type CompanySelection = keyof typeof CompanySelectionEnum
export type FactionSelection = keyof typeof FactionSelectionEnum
export type ItemMarketSelection = keyof typeof ItemMarketSelectionEnum
export type PropertySelection = keyof typeof PropertySelectionEnum
export type TornSelection = keyof typeof TornSelectionEnum
export type UserSelection = keyof typeof UserSelectionEnum

export type Selection = 
    CompanySelection | 
    FactionSelection | 
    ItemMarketSelection |
    PropertySelection | 
    TornSelection | 
    UserSelection;

export type SelectionVerifier = (string) => boolean