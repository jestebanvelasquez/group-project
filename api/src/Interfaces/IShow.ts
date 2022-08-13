export default interface IShow {
	nickName: string;
	eventName: string;
    description:      string;
    imagesEvent:  string[];
    duration:        number;
    priceTime:        number;
    priceDay:        number;
    isActive:          boolean;
    members:      {}[];
    categories:     number;
}
