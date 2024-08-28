import axios, { AxiosError, AxiosResponse } from "axios";

export interface ICallbacks<T> {
	onFinally?: () => void;
	onSuccess?: (data: T) => void;
	onError?: (error: AxiosError) => void;
}

export interface IAPI<T> extends ICallbacks<T> {
	call: () => Promise<AxiosResponse<T>>;
}

export async function CallAPI<T>(props: IAPI<T>): Promise<void> {
	const { call, onFinally, onSuccess, onError } = props;

	try {
		const response = await call();
		if (onSuccess) {
			onSuccess(response.data);
		}
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (onError) {
				onError(error);
			}
		} else {
			console.error("Unexpected error:", error);
		}
	} finally {
		if (onFinally) {
			onFinally();
		}
	}
}
