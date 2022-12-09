import { createEntityReSelectors } from '../../../utils/selectors';
import {devicesAdapter} from '../../reducers/entities/devices/devices.reducers';
import {AppState} from '../../store';

export const devicesSelectors = devicesAdapter.getSelectors(
    (state: AppState) => state.entities.devices
);

export const {
    /** Возвращает Device по Id*/
    byIdSelector: deviceByIdSelector,
    selectById: selectDeviceById,
    /** Возвращает список всех Device*/
    allListSelector: allDevicesListSelector,
    /** Возвращает словарь всех Device*/
    allEntitiesSelector: allDevicesEntitiesSelector,
} = createEntityReSelectors(devicesSelectors);