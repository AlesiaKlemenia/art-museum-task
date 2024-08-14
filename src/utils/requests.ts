import axios from "axios";
import qs from "qs";

import {
  getArtworkBriefInfo,
  getArtworkBySearch,
  getArtworkInfo,
} from "@/constants/url";
import { IArtworkBriefInfo } from "@/interfaces/IArtworkBriefInfo";
import { IArtworkFullInfo } from "@/interfaces/IArtworkFullInformation";
import { IArtworkSearchInfo } from "@/interfaces/IArtworkSearchInfo";
import { IPaginationList } from "@/interfaces/IPaginationList";
import { ISessionStorageData } from "@/interfaces/ISessionStorageData";
import { ISortParams } from "@/pages/Home/SearchInput/interfaces";

export const getApiSuggestions = async (
  word: string,
  options: ISortParams,
): Promise<IPaginationList<IArtworkSearchInfo>> => {
  return axios
    .post<IPaginationList<IArtworkSearchInfo>>(`${getArtworkBySearch}`, {
      fields: ["id", "title"],
      query: { wildcard: { "title.keyword": { value: `${word}*` } } },
      sort: [{ "title.keyword": { order: options.byName } }],
    })
    .then((response) => {
      return response.data as IPaginationList<IArtworkSearchInfo>;
    })
    .catch((error) => {
      return error;
    });
};

export const getSpecials = async (
  page = 1,
  limit = 3,
): Promise<IPaginationList<IArtworkBriefInfo>> => {
  return axios
    .get<IPaginationList<IArtworkBriefInfo>>(`${getArtworkBriefInfo}`, {
      params: {
        fields: ["id", "title", "artist_title", "is_public_domain", "image_id"],
        limit,
        page,
      },
    })
    .then((response) => {
      return response.data as IPaginationList<IArtworkBriefInfo>;
    })
    .catch((error) => {
      return error;
    });
};

export const getArtworkDetailInfo = async (
  id: string,
): Promise<IArtworkFullInfo> => {
  return axios
    .get<IArtworkFullInfo>(getArtworkInfo(id))
    .then((response) => {
      return response.data as IArtworkFullInfo;
    })
    .catch((error) => {
      return error;
    });
};

export const getFavorite = async (
  favoriteIds: ISessionStorageData[],
): Promise<IPaginationList<IArtworkBriefInfo>> => {
  const ids = favoriteIds.map((item) => item.id);

  return axios
    .get<IPaginationList<IArtworkBriefInfo>>(`${getArtworkBriefInfo}`, {
      params: { ids },
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    })
    .then((response) => {
      const result = response.data.data.map((item) => {
        const imageId = favoriteIds.find(
          (elem) => elem.id === item.id,
        ).image_id;
        return { ...item, image_id: imageId } as IArtworkBriefInfo;
      });
      return {
        ...response.data,
        data: result,
      } as IPaginationList<IArtworkBriefInfo>;
    })
    .catch((error) => {
      return error;
    });
};
