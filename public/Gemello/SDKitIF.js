/**
 * Copyright © 2023 SMARTSCAPE
 */


class SDKitIF {

    /** 空間インスタンス */
    static spaceInstance;

    /** デバック情報を出力するかどうか */
    static DEBUG = false;

    /** 準備フラグ */
    static ready = false;

    /**
     * 初期設定をおこなう
     * @param {*} spaceInstance 空間インスタンス
     */
    static init(spaceInstance) {
        SDKitIF.spaceInstance = spaceInstance;

        SDKitIF.ready = true;

        SDKitIF.connect = {
            /**
            * 読み込み完了通知
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            notifyLoadComplete(params) {
                const action = 'NotifyLoadComplete';
                const ret = FunctionAccessor.callExternalFunction(action, params, 180 * 1000);
                return ret;
            }
        }

        SDKitIF.panorama = {
            /**
            * パノラマ情報取得
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            getPanoramaInfo(params) {
                const action = 'GetPanoramaInfo';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            }
        }

        SDKitIF.mode = {
            /**
            * ビューモード設定
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            setViewMode(params) {
                const action = 'SetViewMode';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * ビューモード取得
            * * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            getViewMode(params) {
                const action = 'GetViewMode';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * 計測モード設定
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            setMeasurmentModeEnabled(params) {
                const action = 'SetMeasurmentModeEnabled';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * 計測モード設定取得
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            getMeasurmentModeEnabled(params) {
                const action = 'GetMeasurmentModeEnabled';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * オートパイロットモード設定
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            setAutopilotModeEnabled(params) {
                const action = 'SetAutopilotModeEnabled';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * オートパイロットモード設定情報取得
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            getAutopilotModeEnabled(params) {
                const action = 'GetAutopilotModeEnabled';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * 三次元軸表示設定情報取得
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            getGizmoDisplayState: (params) => {
                const action = 'GetGizmoDisplayState';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * 三次元軸表示設定
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            setGizmoDisplayState: (params) => {
                const action = 'SetGizmoDisplayState';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * タグ設置モード設定
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            setTagMode: (params) => {
                const action = 'SetTagMode';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * タグ設置モード設定取得
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            getTagMode: (params) => {
                const action = 'GetTagMode';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * タグ削除モード設定
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            setDeleteTagMode: (params) => {
                const action = 'SetDeleteTagMode';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * タグ削除モード設定取得
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            getDeleteTagMode: (params) => {
                const action = 'GetDeleteTagMode';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * タグ編集モード設定
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            setEditTagMode: (params) => {
                const action = 'SetEditTagMode';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * タグ編集モード設定取得
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            getEditTagMode: (params) => {
                const action = 'GetEditTagMode';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },

        }

        SDKitIF.ui = {
            /**
            * 標準UI表示設定 
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            setDefaultUIVisible(params) {
                const action = 'SetDefaultUIVisible';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
             * 標準UI表示有効化設定
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            getDefaultUIVisible(params) {
                const action = 'GetDefaultUIVisible';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
             * タグ情報取得
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            getTagInfo(params) {
                const action = 'GetTagInfo';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
             * タグ設置
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            setTag(params) {
                const action = 'SetTag';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
             * 監視しているタグにマウスが侵入した場合スクリーン座標を返却
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            onTargetTagPointerEnter(params) {
                const action = 'OnTargetTagPointerEnter';
                const ret = FunctionAccessor.callExternalFunction(action, params, 999999 * 1000);
                return ret;
            },
            /**
             * 監視しているタグからマウスが出て行った場合スクリーン座標を返却
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            onTargetTagPointerExit(params) {
                const action = 'OnTargetTagPointerExit';
                const ret = FunctionAccessor.callExternalFunction(action, params, 999999 * 1000);
                return ret;
            },
            /**
             * 監視しているタグをマウスが押下した場合スクリーン座標を返却
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            onTargetTagPointerDown(params) {
                const action = 'OnTargetTagPointerDown';
                const ret = FunctionAccessor.callExternalFunction(action, params, 999999 * 1000);
                return ret;
            },
            /**
             * 監視しているタグでマウスが押下解除した場合スクリーン座標を返却
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            onTargetTagPointerUp(params) {
                const action = 'OnTargetTagPointerUp';
                const ret = FunctionAccessor.callExternalFunction(action, params, 999999 * 1000);
                return ret;
            },
            /**
             * タグの形や色、画像を変更
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            editTagShape(params) {
                const action = 'EditTagShape';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            }
        }

        SDKitIF.conversion = {

            //関数
            /**
            * スクリーン座標からワールド座標変換
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            convertScreenToWorld(params) {
                const action = 'ConvertScreenToWorld';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * ワールド座標からスクリーン座標変換
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            convertWorldToScreen(params) {
                const action = 'ConvertWorldToScreen';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },

            /**
             * スクリーン座標リスト
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            convertScreenToWorldAsList(params) {
                const action = 'ConvertScreenToWorldAsList';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
             * ワールド座標リスト
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            convertWorldToScreenAsList(params) {
                const action = 'ConvertWorldToScreenAsList';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            }
        }

        SDKitIF.object3D = {
            /**
            * プリミティブオブジェクト生成
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            createPremitiveObject(params) {
                const action = 'CreatePremitiveObject';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * 3Dオブジェクト挿入
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            insert3DObject(params) {
                const action = 'Insert3DObject';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
             * 3Dオブジェクト削除
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            remove3DObject(params) {
                const action = 'Remove3DObject';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },

            /**
             * 3Dオブジェクト編集
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            edit3DObject(params) {
                const action = 'Edit3DObject';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
             * オプションメッシュ設定
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            setOptionMeshSettings(params) {
                const action = 'SetOptionMeshSettings';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * オプションメッシュ設定取得
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            getOptionMeshSettings(params) {
                const action = 'GetOptionMeshSettings';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            }
        }

        SDKitIF.camera = {
            /**
             * パノラマ回転
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            rotatePanorama(params) {
                const action = 'RotatePanorama';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },

            /**
             * パノラマ移動
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            movePanorama(params) {
                const action = 'MovePanorama';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
             * カメラ座標取得
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            getCameraPosition(params) {
                const action = 'GetCameraPosition';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * 移動状態取得
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            getMovingState(params) {
                const action = 'GetMovingState';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
            * アニメーション再生
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            playAnimation(params) {
                const action = 'PlayAnimation';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9999 * 1000);
                return ret;
            },
            /**
            * アニメーション停止
            * @param {string} params json文字列
            * @return {Promise} 非同期処理インスタンス
            */
            stopAnimation(params) {
                const action = 'StopAnimation';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            },
            /**
             * パノラマモード時にカメラの倍率を制御
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            controllPanoramaZoom(params) {
                const action = 'ControllPanoramaZoom';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            }
        }

        SDKitIF.validation = {
            /**
             * 標準UI表示設定
             * @param {string} params json文字列
             * @return {Promise} 非同期処理インスタンス
             */
            exists3DObjectBetweenPoints(params) {
                const action = 'Exists3DObjectBetweenPoints';
                const ret = FunctionAccessor.callExternalFunction(action, params, 9 * 1000);
                return ret;
            }
        }
    }

    /**
     * アウターアプリからのアクションをディスパッチする
     * @param {*} action アクション名
     * @param {*} params パラメータリスト
     */
    static async dispatchAction(action, params, e) {
        SDKitIF.debugLog(`SDKitIF: action: ${action} param:${params} `);

        const reactPromise = (promiseInstance) => {
            promiseInstance.then((result) => {
                // 結果を処理する
                e.source.postMessage({ action, result }, e.origin);
            })
                .catch((error) => {
                    // エラーを処理する
                    console.error(error);
                });;

            return;
        }

        //SDKitIF.initが呼ばれるまでループ
        if (action === 'connect') {
            const intervalId = setInterval(() => {
                if (!SDKitIF.ready) {
                    // 条件が false を返した時はループ続行
                    return;
                }

                clearInterval(intervalId);
                const res = SDKitIF.connect.notifyLoadComplete(params);
                reactPromise(res);
                return;
            })
        }
        // panorama系処理
        if (action === 'getPanoramaInfo') {
            const res = SDKitIF.panorama.getPanoramaInfo(params);
            reactPromise(res);
            return;
        }
        // mode系処理
        if (action === 'setViewMode') {
            reactPromise(SDKitIF.mode.setViewMode(params));
            return;
        }
        if (action === 'getViewMode') {
            reactPromise(SDKitIF.mode.getViewMode(params));
            return;
        }
        if (action === 'setMeasurmentModeEnabled') {
            reactPromise(SDKitIF.mode.setMeasurmentModeEnabled(params));
            return;
        }
        if (action === 'getMeasurmentModeEnabled') {
            reactPromise(SDKitIF.mode.getMeasurmentModeEnabled(params));
            return;
        }
        if (action === 'setAutopilotModeEnabled') {
            reactPromise(SDKitIF.mode.setAutopilotModeEnabled(params));
            return;
        }
        if (action === 'getAutopilotModeEnabled') {
            reactPromise(SDKitIF.mode.getAutopilotModeEnabled(params));
            return;
        }
        if (action === 'getGizmoDisplayState') {
            reactPromise(SDKitIF.mode.getGizmoDisplayState(params));
            return;
        }
        if (action === 'setGizmoDisplayState') {
            reactPromise(SDKitIF.mode.setGizmoDisplayState(params));
            return;
        }
        if (action === 'setTagMode') {
            reactPromise(SDKitIF.mode.setTagMode(params));
            return;
        }
        if (action === 'getTagMode') {
            reactPromise(SDKitIF.mode.getTagMode(params));
            return;
        }
        if (action === 'getDeleteTagMode') {
            reactPromise(SDKitIF.mode.getDeleteTagMode(params));
            return;
        }
        if (action === 'setDeleteTagMode') {
            reactPromise(SDKitIF.mode.setDeleteTagMode(params));
            return;
        }
        if (action === 'getEditTagMode') {
            reactPromise(SDKitIF.mode.getEditTagMode(params));
            return;
        }
        if (action === 'setEditTagMode') {
            reactPromise(SDKitIF.mode.setEditTagMode(params));
            return;
        }
        // ui系処理
        if (action === 'setDefaultUIVisible') {
            reactPromise(SDKitIF.ui.setDefaultUIVisible(params));
            return;
        }
        if (action === 'getDefaultUIVisible') {
            reactPromise(SDKitIF.ui.getDefaultUIVisible(params));
            return;
        }
        if (action === 'setTag') {
            reactPromise(SDKitIF.ui.setTag(params));
            return;
        }
        if (action === 'getTagInfo') {
            reactPromise(SDKitIF.ui.getTagInfo(params));
            return;
        }
        if (action === 'onTargetTagPointerEnter') {
            reactPromise(SDKitIF.ui.onTargetTagPointerEnter(params));
            return;
        }
        if (action === 'onTargetTagPointerExit') {
            reactPromise(SDKitIF.ui.onTargetTagPointerExit(params));
            return;
        }
        if (action === 'onTargetTagPointerDown') {
            reactPromise(SDKitIF.ui.onTargetTagPointerDown(params));
            return;
        }
        if (action === 'onTargetTagPointerUp') {
            reactPromise(SDKitIF.ui.onTargetTagPointerUp(params));
            return;
        }
        if (action === 'editTagShape') {
            reactPromise(SDKitIF.ui.editTagShape(params));
            return;
        }
        // conversion系処理
        if (action === 'convertScreenToWorld') {
            reactPromise(SDKitIF.conversion.convertScreenToWorld(params));
            return;
        }
        if (action === 'convertWorldToScreen') {
            reactPromise(SDKitIF.conversion.convertWorldToScreen(params));
            return;
        }
        if (action === 'convertScreenToWorldAsList') {
            reactPromise(SDKitIF.conversion.convertScreenToWorldAsList(params));
            return;
        }
        if (action === 'convertWorldToScreenAsList') {
            reactPromise(SDKitIF.conversion.convertWorldToScreenAsList(params));
            return;
        }
        // object3D系処理
        if (action === 'createPremitiveObject') {
            reactPromise(SDKitIF.object3D.createPremitiveObject(params));
            return;
        }
        if (action === 'insert3DObject') {
            reactPromise(SDKitIF.object3D.insert3DObject(params));
            return;
        }
        if (action === 'remove3DObject') {
            reactPromise(SDKitIF.object3D.remove3DObject(params));
            return;
        }
        if (action === 'edit3DObject') {
            reactPromise(SDKitIF.object3D.edit3DObject(params));
            return;
        }
        if (action === 'setOptionMeshSettings') {
            reactPromise(SDKitIF.object3D.setOptionMeshSettings(params));
            return;
        }
        if (action === 'getOptionMeshSettings') {
            reactPromise(SDKitIF.object3D.getOptionMeshSettings(params));
            return;
        }
        // camera系処理
        if (action === 'rotatePanorama') {
            reactPromise(SDKitIF.camera.rotatePanorama(params));
            return;
        }
        if (action === 'movePanorama') {
            reactPromise(SDKitIF.camera.movePanorama(params));
            return;
        }
        if (action === 'getCameraPosition') {
            reactPromise(SDKitIF.camera.getCameraPosition(params));
            return;
        }
        if (action === 'getMovingState') {
            reactPromise(SDKitIF.camera.getMovingState(params));
            return;
        }
        if (action === 'playAnimation') {
            reactPromise(SDKitIF.camera.playAnimation(params));
            return;
        }
        if (action === 'stopAnimation') {
            reactPromise(SDKitIF.camera.stopAnimation(params));
            return;
        }
        if (action === 'controllPanoramaZoom') {
            reactPromise(SDKitIF.camera.controllPanoramaZoom(params));
            return;
        }
        // validation系処理
        if (action === 'exists3DObjectBetweenPoints') {
            reactPromise(SDKitIF.validation.exists3DObjectBetweenPoints(params));
            return;
        }
    }


    /**
     * デバックログを出力する
     * @param {*} msg 
     */
    static debugLog(msg) {
        if (!SDKitIF.DEBUG) return;
        console.log(msg);
    }
}


/**
 * フレーム間メッセージイベントを受け取り、ディスパッチする
 */
window.addEventListener('message', function (e) {

    SDKitIF.dispatchAction(e.data.action, e.data.params, e);

});

/**
 * 関数アクセサ
 */
class FunctionAccessor {
    /**
     * 外部関数呼び出し
     * @param {Object} action アクション
     * @param {Object} params 引数
     * @param {Object} timeOut 待機時間(ms) SDKitより短い時間であること
     * @returns {Promise} resolveの場合content
     */
    static callExternalFunction(action, params, timeOut) {

        timeOut = timeOut || null;

        const jsonObj = JSON.parse(params);
        const confirmId = jsonObj.requestId;

        const createHandler = (resolve, reject) => {
            const handler = (event) => {
                const result = event.detail;
                //requestID確認のため
                const responseObj = JSON.parse(result);
                if (responseObj.requestId !== confirmId) {
                    return;
                }
                window.removeEventListener('send', handler);
                resolve(result);
            }

            return handler;
        }

        const promise = new Promise((resolve, reject) => {
            const handler = createHandler(resolve, reject);
            //数値か判定
            if (timeOut !== null && Number.isFinite(timeOut)) {
                setTimeout(() => {
                    const status = "NG";
                    const errorCode = 20002;
                    window.removeEventListener('send', handler);
                    reject({ status, errorCode });
                }, timeOut);
            }
            window.addEventListener('send', handler);
            SDKitIF.spaceInstance.SendMessage('Reseptor', action, params);
        })
        return promise;
    }

}


