import axios from "axios";

import {
  getArtworkBriefInfo,
  getArtworkBySearch,
  getArtworkFullInfo,
} from "@/constants/url";
import { IArtworkBriefInfo } from "@/interfaces/IArtworkBriefInfo";
import { IArtworkFullInfo } from "@/interfaces/IArtworkFullInformation";
import { IArtworkSearchInfo } from "@/interfaces/IArtworkSearchInfo";
import { IPaginationList } from "@/interfaces/IPaginationList";

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
    .get<IArtworkFullInfo>(getArtworkFullInfo(id))
    .then((response) => {
      return response.data as IArtworkFullInfo;
    })
    .catch((error) => {
      return error;
    });
};
