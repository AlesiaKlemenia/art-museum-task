import axios from "axios";

import {
  getArtworkBriefInfo,
  getArtworkBySearch,
  getArtworkInfo,
  getImageUrl,
} from "@/constants/url";
import { IArtworkBriefInfo } from "@/interfaces/IArtworkBriefInfo";
import { IArtworkFullInfo } from "@/interfaces/IArtworkFullInformation";
import { IArtworkSearchInfo } from "@/interfaces/IArtworkSearchInfo";
import { IPaginationList } from "@/interfaces/IPaginationList";
import { ISessionStorageData } from "@/interfaces/ISessionStorageData";

export const getApiSuggestions = async (
  word: string,
): Promise<IPaginationList<IArtworkSearchInfo>> => {
  return axios
    .get<IPaginationList<IArtworkSearchInfo>>(`${getArtworkBySearch}`, {
      params: {
        fields: ["id", "title"],
        q: word,
      },
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
    .post<IPaginationList<IArtworkBriefInfo>>(`${getArtworkBySearch}`, {
      query: {
        bool: {
          filter: {
            ids: {
              values: ids,
            },
          },
        },
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
