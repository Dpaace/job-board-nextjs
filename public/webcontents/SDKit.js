/**
 * Copyright © 2023 SMARTSCAPE
 */

console.log('SDKIT.js loaded successfully');

/**
 * SDKitクラス
 */
class SDKit {

  /**空間ビューのiFrame*/
  static frame;

  /**デバック情報を出力するかどうか*/
  static DEBUG = false;

  /**
   * 初期設定をおこなう
   * @param {*} frame 空間ビューのiFrame
   * @return {Promise} 非同期処理インスタンス
   */
  static init(frame) {

    SDKit.sview = frame;

    SDKit.panorama = {
      /**
      * パノラマ情報取得
      * @returns {Promise} 非同期処理インスタンス&nbsp;<br>
      * 正常系{<br>
      * &emsp;panoramaInfolist:"パノラマ情報"<br>
      * &emsp;key:"キー：識別子"<br>
      * &emsp;coordinate:"3D座標"<br>
      * &emsp;rotation:"回転"<br>
      * }<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.Simple.getPanoramaInfo().then((result) => 
         {console.log(result.content[1].key);});
        @member SDKit.panorama
      */
      getPanoramaInfo: () => {
        const action = 'getPanoramaInfo';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      }
    }

    /**
     * modeに関するメソッド
     * @returns {Promise} 非同期処理インスタンス
     */
    SDKit.mode = {
      /**
      * 表示モード設定
      * @param {string} viewMode panoramaまたはdollhouse 
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      * 正常系{null}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.Simple.setViewMode("dollhouse").then((result) => 
       {console.log(result.status);});
      */
      setViewMode: (viewMode) => {
        const action = 'setViewMode';
        const params = { viewMode };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * 表示モード取得
      *  正常系{<br>
      * &emsp;viewMode: "現在の表示モードをdollhouseまたはpanoramaで返却"<br>
      * }}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.Simple.getViewMode().then((result) => 
         {console.log(result["viewMode"]);});
      */
      getViewMode: () => {
        const action = 'getViewMode';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * 計測モード設定
      * @param {boolean} enabled trueで有効化
      *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
      *正常系{ null}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.Simple.setMeasurmentModeEnabled(true).then((result) => 
         {console.log(result);});
      */
      setMeasurmentModeEnabled: (enabled) => {
        const action = 'setMeasurmentModeEnabled';
        const params = { enabled };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * 計測モード設定情報取得
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      * 正常系{<br>
      * &emsp;enabled:"計測モードの状態を返却"<br>}}}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.Simple.getMeasurmentModeEnabled().then((result) => 
         {console.log(result["enabled"]);});
      */
      getMeasurmentModeEnabled: () => {
        const action = 'getMeasurmentModeEnabled';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * オートパイロットモード設定
      * @param {boolean} enabled trueで有効化
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      * 正常系{ null}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.Simple.setAutopilotModeEnabled(true).then((result) => 
           {console.log(result);});
         */
      setAutopilotModeEnabled: (enabled) => {
        const action = 'setAutopilotModeEnabled';
        const params = { enabled };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * オートパイロットモード設定情報取得
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      * {<br>
      * 正常系&emsp;enabled:"オートパイロットモードの状態を返却trueまたはfalse"<br>}}}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.Simple.getAutopilotModeEnabled().then((result) => 
         {console.log(result["enabled"]);});
      */
      getAutopilotModeEnabled: () => {
        const action = 'getAutopilotModeEnabled';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * 三次元軸表示状態取得
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      * {<br>
      * 正常系&emsp;enabled:"三次元軸表示の状態を返却trueまたはfalse"<br>}}}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.mode.getGizmoDisplayState().then((result) => 
         {console.log(result["enabled"]);});
       */
      getGizmoDisplayState: () => {
        const action = 'getGizmoDisplayState';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * 三次元軸表示状態設定
      * @param {boolean} enabled trueで有効化
      * @param {Vector2|null} position2D 表示したいスクリーン座標
      *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
      *正常系{ null}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * position2D={x:10,y:10}
      * SDKit.mode.setGizmoDisplayState(true,position2D).then((result) => 
         {console.log(result);});
      */
      setGizmoDisplayState: (enabled, position2D) => {
        position2D = position2D || null;
        const action = 'setGizmoDisplayState';
        const params = { enabled, position2D };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * タグ設置モード設定
      * @param {boolean} enabled trueで有効化
      *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
      *正常系{ null}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * position2D={x:10,y:10}
      * SDKit.mode.setTagMode(true).then((result) => 
         {console.log(result);});
      */
      setTagMode: (enabled) => {
        const action = 'setTagMode';
        const params = { enabled };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * タグ設置モード設定取得
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      * {<br>
      * 正常系&emsp;enabled:"タグ設置モード設定状態を返却trueまたはfalse"<br>}}}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.mode.getTagMode().then((result) => 
         {console.log(result["enabled"]);});
       */
      getTagMode: () => {
        const action = 'getTagMode';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * タグ削除モード設定
      * @param {boolean} enabled trueで有効化
      *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
      *正常系{ null}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * position2D={x:10,y:10}
      * SDKit.mode.setDeleteTagMode(true).then((result) => 
         {console.log(result);});
      */
      setDeleteTagMode: (enabled) => {
        const action = 'setDeleteTagMode';
        const params = { enabled };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * タグ削除モード設定取得
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      * {<br>
      * 正常系&emsp;enabled:"タグ削除モード設定状態を返却trueまたはfalse"<br>}}}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.mode.getDeleteTagMode().then((result) => 
         {console.log(result["enabled"]);});
       */
      getDeleteTagMode: () => {
        const action = 'getDeleteTagMode';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * タグ編集モード設定
      * @param {boolean} enabled trueで有効化
      *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
      *正常系{ null}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * position2D={x:10,y:10}
      * SDKit.mode.setEditTagMode(true).then((result) => 
         {console.log(result);});
      */
      setEditTagMode: (enabled) => {
        const action = 'setEditTagMode';
        const params = { enabled };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * タグ編集モード設定取得
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      * {<br>
      * 正常系&emsp;enabled:"タグ編集モード設定状態を返却trueまたはfalse"<br>}}}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.mode.getEditTagMode().then((result) => 
         {console.log(result["enabled"]);});
       */
      getEditTagMode: () => {
        const action = 'getEditTagMode';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },
    }


    SDKit.conversion = {
      /**
      * スクリーン座標からワールド座標変換
      * @param {Vector2} position2D ワールド座標を取得したいスクリーン座標
      * @param {float} position2D.x x座標
      * @param {float} position2D.y y座標
      * @param {Vector2} windowSize ウィンドウサイズ
      * @param {float} windowSize.x ウィンドウの横幅
      * @param {float} windowSize.y ウィンドウの高さ
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      正常系{<br>
      &emsp;position3D:{"ワールド座標を返却"<br>
      &emsp;&emsp;x:x座標<br>
      &emsp;&emsp;y:y座標<br>
      &emsp;&emsp;z:z座標<br>
      }}}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      @example
     position2D={x:10,y:10}
            SDKit.Simple.convertScreenToWorld(position2D).then((result) => 
            {console.log(result["position3D"]);});
     */
      convertScreenToWorld: (position2D, windowSize) => {
        const action = 'convertScreenToWorld';
        const params = { position2D, windowSize };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
       * ワールド座標からスクリーン座標変換
       * @param {Vector3} position3D スクリーン座標を取得したいワールド座標
       * @param {float} position3D.x x座標
       * @param {float} position3D.y y座標
       * @param {float} position3D.z z座標
       * @param {Vector2} windowSize ウィンドウサイズ
       * @param {float} windowSize.x ウィンドウの横幅
       * @param {float} windowSize.y ウィンドウの高さ
       *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
       正常系{<br>
         &emsp;position2D:{"スクリーン座標を返却"<br>
         &emsp;&emsp;x:x座標<br>
         &emsp;&emsp;y:y座標<br>
         &emsp;&emsp;z:z座標<br>
        }}}
        }}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
         @example
         position3D={x:1,y:1,z:1};
             SDKit.Simple.convertWorldToScreen(position3D).then((result) => 
             {console.log(result["position2D"]);});
       */
      convertWorldToScreen: (position3D, windowSize) => {
        const action = 'convertWorldToScreen';
        const params = { position3D, windowSize };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
       * スクリーン座標リスト
       * @param {List<Vector2>} position2DList ワールド座標を取得したいスクリーン座標にしたいリスト
       * @param {Vector2} windowSize ウィンドウサイズ
       * @returns {Promise} 非同期処理インスタンス&nbsp;<br>
       * 正常系{<br>
       &emsp;position3DList:["ワールド座標を返却"<br>
       &emsp;&emsp;{x:x座標<br>
       &emsp;&emsp;y:y座標<br>
       &emsp;&emsp;z:z座標},<br>
       &emsp;&emsp;{x:x座標<br>
       &emsp;&emsp;y:y座標<br>
       &emsp;&emsp;z:z座標}]<br>
       }<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       */
      convertScreenToWorldAsList: (position2DList, windowSize) => {
        const action = 'convertScreenToWorldAsList';
        const params = { position2DList, windowSize };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
       * ワールド座標リスト
       * @param {List<Vector3>} position3DList ワールド座標を取得したいスクリーン座標にしたいリスト
       * @param {Vector2} windowSize ウィンドウサイズ
       * @returns {Promise} 非同期処理インスタンス&nbsp;<br>
       * 正常系{<br>
       &emsp;position2DList:["スクリーン座標を返却"<br>
       &emsp;&emsp;{x:x座標<br>
       &emsp;&emsp;y:y座標<br>
       &emsp;&emsp;z:z座標},<br>
       &emsp;&emsp;{x:x座標<br>
       &emsp;&emsp;y:y座標<br>
       &emsp;&emsp;z:z座標}]<br>
       }<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       */
      convertWorldToScreenAsList: (position3DList, windowSize) => {
        const action = 'convertWorldToScreenAsList';
        const params = { position3DList, windowSize };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      }
    }


    SDKit.object3D = {
      /**
       * プリミティブオブジェクト生成
       * @param {string} key キー
       * @param {string} shape "Cube","Sphere","Capsule","Cylinder","Plane","Quad"
       * @param {Vector3} position3D 配置したい場所x座標
       * @param {Vector3|null} scale suke-ru 
       * @param {Vector3|null} rotation 回転
       * @param {string|null} color カラーコード
       * @param {float|null} transparent 透過
       * @param {boolean|null} collisionEnabled 当たり判定
       *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
        正常系{ null}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
        @example
        const position3D={x:1,y:1,z:1};
            scale={x:3,y:3,z:3};
            rotation={x:0,y:0,z:0};

            SDKit.Simple.createPremitiveObject("cube","Cube",position3D,rotation,scale,"#FF0000",0.5).then((result) => 
            {console.log(result);});
          */
      createPremitiveObject: (key, shape,
        position3D, rotation, scale, color, transparent, collisionEnabled) => {
        rotation = rotation || null;
        scale = scale || null;
        color = color || null;
        transparent = transparent || null;
        const action = 'createPremitiveObject';
        const params = { key, shape, position3D, scale, rotation, color, transparent, collisionEnabled };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
       * 3Dオブジェクト挿入
       * @param {string} key キー
       * @param {string} objectFileURL 取得したいオブジェクトのURL
       * @param {Position3} position3D 配置したい場所x座標 position3D={x:x座標,y:y座標,z:z座標}
       * @param {Position3|null} scale スケール
       * @param {Position3|null} rotation 回転
       * @param {string|null} color カラーコード
       * @param {float|null} transparent 透過
       * @param {boolean|null} collisionEnabled 当たり判定
       * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
        正常系{ null}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       * @example
        position3D={x:1,y:1,z:1};
              scale={x:3,y:3,z:3};
              rotation={x:0,y:0,z:0};
              SDKit.Simple.insert3DObject("boy","https://ricardoreis.net/trilib/demos/avatars/003/003_visemes.zip",position3D,rotation,scale).then((result) => 
              {console.log(result);});
          */
      insert3DObject: (key, objectFileURL,
        position3D, rotation, scale, color, transparent, collisionEnabled) => {
        rotation = rotation || null;
        scale = scale || null;
        color = color || null;
        transparent = transparent || null;
        const action = 'insert3DObject';
        const params = { key, objectFileURL, position3D, scale, rotation, color, transparent, collisionEnabled };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
       * 3Dオブジェクト削除
       * @param {string} key key指定
       * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
       * 正常系{ null}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       * @example
       * SDKit.remove3DObject("boy").then((result) => 
            {console.log(result.status);});
       */
      remove3DObject: (key) => {
        const action = 'remove3DObject';
        const params = { key };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
       * 3Dオブジェクト編集
       * @param {string} key 名前
       * @param {Position3|null} position3D 配置したい場所x座標 position3D={x:x座標,y:y座標,z:z座標}
       * @param {Position3|null} scale スケール
       * @param {Position3|null} rotation 回転
       * @param {string|null} color カラーコード
       * @param {float|null} transparent 透過
       * @param {boolean|null} collisionEnabled 当たり判定
       * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
       正常系{ null}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       @example
       position3D={x:1,y:1,z:1};
            scale={x:3,y:3,z:3};
            rotation={x:0,y:0,z:0};
            SDKit.Simple.edit3DObject("cube",position3D,rotation,scale,"#FF0000",1).then((result) => 
            {console.log(result.status);});
       */
      edit3DObject: (key, position3D, rotation, scale, color, transparent, collisionEnabled) => {
        rotation = rotation || null;
        scale = scale || null;
        color = color || null;
        transparent = transparent || null;
        const action = 'edit3DObject';
        const params = { key, position3D, scale, rotation, color, transparent, collisionEnabled };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
       * オプションメッシュ設定
       * @param {string} key key指定
       * @param {boolean} enabled 表示設定
       * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
       * 正常系{ null}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       * @example
       * SDKit.object3D.setOptionMeshSettings("wind",true).then((result) => 
            {console.log(result.status);});
       */
      setOptionMeshSettings: (key, enabled) => {
        const action = 'setOptionMeshSettings';
        const params = { key, enabled };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
       * オプションメッシュ設定取得
       * @returns {Promise} 非同期処理インスタンス&nbsp;<br>
       * 正常系{<br>
       &emsp;optionMeshSettingsParamList:["オプションメッシュ設定を返却"<br>
       &emsp;&emsp;{key:オプションメッシュのkey<br>
       &emsp;&emsp;enabled:表示状態}
       }<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       */
      getOptionMeshSettings: () => {
        const action = 'getOptionMeshSettings';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      }
    }

    SDKit.camera = {
      /**
       * パノラマ回転
       * @param {boolean} enabled trueで回転 
       *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
        正常系{ null}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       */
      rotatePanorama(enabled) {
        const action = 'rotatePanorama';
        const params = { enabled };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000)
        return ret;
      },

      /**
       * パノラマ移動
       * @param {string} key キー：パノラマの識別子
       * @param {Position3|null} rotation 回転
       * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
        正常系 { null}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
         @example
         SDKit.Simple.movePanorama("28").then((result) => 
            {console.log(result);});
    
       */
      movePanorama(key, rotation) {
        rotation = rotation || null;
        const action = 'movePanorama';
        const params = { key, rotation };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000)
        return ret;
      },

      /**
       * カメラ座標取得
       * @returns {Promise} 非同期処理インスタンス&nbsp;<br>
       正常系{<br>
       &emsp;position3D:{"ワールド座標を返却(x,y,z)"<br>
       &emsp;&emsp;x:x座標<br>
       &emsp;&emsp;y:y座標<br>
       &emsp;&emsp;z:z座標<br>
       }}}<br>
        異常系{status:"NG",ErrorCode:エラーコード}
       */
      getCameraPosition: () => {
        const action = 'getCameraPosition';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * 移動状態取得取得
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      * {<br>
      * 正常系&emsp;enabled:"製紙中華値を返却trueまたはfalse"<br>}}}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.Simple.getMovingState().then((result) => 
         {console.log(result["enabled"]);});
      */
      getMovingState: () => {
        const action = 'getMovingState';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * アニメーション再生
      *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
       正常系{ null}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
      @example
      SDKit.Simple.playAnimation(
        {
          "animationList": [
            {
              "type": "MoveToDollhouse",
              "value": {
                "position": {
                  "x": -0.8282001,
                  "y": 7.39675951,
                  "z": -44.1765366
                },
                "angle": {
                  "x": 10.9750042,
                  "y": 0.61502403,
                  "z": 0
                }
              }
            },
            {
              "type": "MoveToDollhouse",
              "value": {
                "position": {
                  "x": -0.5571856,
                  "y": 21.1251965,
                  "z": -19.9571228
                },
                "angle": {
                  "x": 85.37395,
                  "y": 0.19671461,
                  "z": 8.27003248e-8
                }
              }
            }
            }
          ]
        }
      ).then((result) => 
           {console.log(result.contents);});
      */
      playAnimation: (data) => {
        const action = 'playAnimation';
        const params = { data };
        const ret = FunctionAccessor.callExternalFunction(action, params.data, 99999 * 1000);
        return ret;
      },

      /**
      * アニメーション停止
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      * {<br>
      * 正常系{ null}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.Simple.stopAnimation().then((result) => 
         {console.log(result["enabled"]);});
      */
      stopAnimation: () => {
        const action = 'stopAnimation';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },
      /**
      * パノラマモード時にカメラの倍率を制御
      * @param {float} zoomratio ズーム倍率0~1.0
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      * {<br>
      * 正常系{ null}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.camera.controllPanoramZoom().then((result) => 
         {console.log(result);});
      */
      controllPanoramaZoom: (zoomratio) => {
        const action = 'controllPanoramaZoom';
        const params = { zoomratio };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },
    }

    SDKit.ui = {
      /**
       * 標準UI表示設定
       * @param {boolean} virtualTourViewButtonVisible バーチャルツアーボタン有効化設定　trueで有効化
       * @param {boolean} dollhouseViewButtonVisible ドールハウスボタン有効化設定　trueで有効化
       * @param {boolean} measurementButtonVisible 計測ボタン有効化設定　trueで有効化
       * @param {boolean} autopilotButtonVisible オートパイロットボタン有効化設定　trueで有効化
       * @param {boolean} informationButtonVisible 情報ボタン有効化設定　trueで有効化
       *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
       正常系{ null}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       @example
       SDKit.Simple.setDefaultUIVisible(false,false,false,false).then((result) => 
        {console.log(result);});
         */
      setDefaultUIVisible: (virtualTourViewButtonVisible, dollhouseViewButtonVisible, measurementButtonVisible, autopilotButtonVisible, informationButtonVisible) => {
        const action = 'setDefaultUIVisible';
        const params = {
          virtualTourViewButtonVisible, dollhouseViewButtonVisible, measurementButtonVisible, autopilotButtonVisible, informationButtonVisible
        };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * 標準UI表示設定情報取得
      *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
       正常系{ <br>
       &emsp;virtualTourViewButtonVisible:"バーチャルツアーボタンの状態。trueまたはfalse"<br>
       &emsp;measurementButtonVisible:"計測ボタンの状態。trueまたはfalse"<br>
       &emsp;dollhouseViewButtonVisible:"ドールハウスボタンの状態。trueまたはfalse"<br>
       &emsp;autopilotButtonVisible:"オートパイロットボタンの状態。trueまたはfalse"<br>
       &emsp;informationButtonVisible:"情報ボタンの状態。trueまたはfalse"<br>}}}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      @example
      SDKit.Simple.getDefaultUIVisible().then((result) => 
           {console.log("ドールハウスボタンの表示状態"+result["dollhouseViewButtonVisible"]);});
      */
      getDefaultUIVisible: () => {
        const action = 'getDefaultUIVisible';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * タグ情報取得
      *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
       正常系{ <br>
       &thinsp;tagInfoList:"タグの情報のリスト"[<br>
       &emsp;tagID:"各タグ一意の値"<br>
       &emsp;tagImagePosition:"タグのボタンの三次元座標"<br>
       &emsp;firstPoint:"タグから延びている線の端点"<br>
       &emsp;secondPoint:"タグから延びている線の端点"<br>]}}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      @example
      SDKit.Simple.getTagInfo().then((result) => 
           {console.log(result.contents);});
      */
      getTagInfo: () => {
        const action = 'getTagInfo';
        const params = null;
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      },

      /**
      * タグ設置
      *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
       正常系{ null}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
      @example
      SDKit.Simple.setTag(
        "tagInfoList": [
      {
        "tagID": "aea0526f75d744138107bf70335ae61b",
        "tagImagePosition": {
          "x": -3.669065,
          "y": 0.311859846,
          "z": -33.5672874
        },
        "firstPoint": {
          "x": -3.77039671,
          "y": -0.165596128,
          "z": -33.50759
        },
        "secondPoint": {
          "x": -3.669065,
          "y": 0.311859846,
          "z": -33.5672874
        }
      },
      {
        "tagID": "06ee3718645d452fad9dd1019bc779d3",
        "tagImagePosition": {
          "x": -1.635642,
          "y": 0.264273584,
          "z": -31.2676029
        },
        "firstPoint": {
          "x": -1.72221041,
          "y": 0.100993276,
          "z": -30.51666
        },
        "secondPoint": {
          "x": -1.635642,
          "y": 0.264273584,
          "z": -31.2676029
        }
      }]
      ).then((result) => 
           {console.log(result.contents);});
      */
      setTag: (data) => {
        const action = 'setTag';
        const params = { data };
        const ret = FunctionAccessor.callExternalFunction(action, params.data, 15 * 1000);
        return ret;
      },

      /**
       * 監視しているタグにマウスが侵入した場合スクリーン座標を返却
       * @param {string} tagID 監視したいタグID
       * @param {Vector2} windowSize ウィンドウサイズ
       * @param {float} windowSize.x ウィンドウの横幅
       * @param {float} windowSize.y ウィンドウの高さ
       *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
       正常系{<br>
         &emsp;position2D:{"スクリーン座標を返却"<br>
         &emsp;&emsp;x:x座標<br>
         &emsp;&emsp;y:y座標<br>
         &emsp;&emsp;z:z座標<br>
        }}}
        }}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       */
      onTargetTagPointerEnter: (tagID, windowSize) => {
        const action = 'onTargetTagPointerEnter';
        const params = { tagID, windowSize };
        const ret = FunctionAccessor.callExternalFunction(action, params, 999999 * 1000);
        return ret;
      },
      /**
       * 監視しているタグからマウスが出て行った場合スクリーン座標を返却
       * @param {string} tagID 監視したいタグID
       * @param {Vector2} windowSize ウィンドウサイズ
       * @param {float} windowSize.x ウィンドウの横幅
       * @param {float} windowSize.y ウィンドウの高さ
       *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
       正常系{<br>
         &emsp;position2D:{"スクリーン座標を返却"<br>
         &emsp;&emsp;x:x座標<br>
         &emsp;&emsp;y:y座標<br>
         &emsp;&emsp;z:z座標<br>
        }}}
        }}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       */
      onTargetTagPointerExit: (tagID, windowSize) => {
        const action = 'onTargetTagPointerExit';
        const params = { tagID, windowSize };
        const ret = FunctionAccessor.callExternalFunction(action, params, 999999 * 1000);
        return ret;
      },
      /**
       * 監視しているタグをマウスが押下した場合スクリーン座標を返却
       * @param {string} tagID 監視したいタグID
       * @param {Vector2} windowSize ウィンドウサイズ
       * @param {float} windowSize.x ウィンドウの横幅
       * @param {float} windowSize.y ウィンドウの高さ
       *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
       正常系{<br>
         &emsp;position2D:{"スクリーン座標を返却"<br>
         &emsp;&emsp;x:x座標<br>
         &emsp;&emsp;y:y座標<br>
         &emsp;&emsp;z:z座標<br>
        }}}
        }}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       */
      onTargetTagPointerDown: (tagID, windowSize) => {
        const action = 'onTargetTagPointerDown';
        const params = { tagID, windowSize };
        const ret = FunctionAccessor.callExternalFunction(action, params, 999999 * 1000);
        return ret;
      },
      /**
     * 監視しているタグでマウスが押下解除した場合スクリーン座標を返却
     * @param {string} tagID 監視したいタグID
     * @param {Vector2} windowSize ウィンドウサイズ
     * @param {float} windowSize.x ウィンドウの横幅
     * @param {float} windowSize.y ウィンドウの高さ
     *@returns {Promise}　非同期処理インスタンス&nbsp;<br>
     正常系{<br>
       &emsp;position2D:{"スクリーン座標を返却"<br>
       &emsp;&emsp;x:x座標<br>
       &emsp;&emsp;y:y座標<br>
       &emsp;&emsp;z:z座標<br>
      }}}
      }}<br>
     * 異常系{status:"NG",ErrorCode:エラーコード}
     */
      onTargetTagPointerUp: (tagID, windowSize) => {
        const action = 'onTargetTagPointerUp';
        const params = { tagID, windowSize };
        const ret = FunctionAccessor.callExternalFunction(action, params, 999999 * 1000);
        return ret;
      },
      /**
      * タグの形や色、画像を変更
      * @param {string} tagID 変更したいタグID
      * @param {string} color 変更したい色のカラーコード
      * @param {string} shape SquareまたはCircle
      * @param {string} url ボタンの画像のURL
      * @param {boolean} lineEnabled タグの線を表示するかどうか
      * @returns {Promise}　非同期処理インスタンス&nbsp;<br>
      * {<br>
      * 正常系{ null}<br>
      * 異常系{status:"NG",ErrorCode:エラーコード}
      * @example
      * SDKit.ui.editTagShape("tagID","#FFFFFF","Square").then((result) => 
         {console.log(result.content);});
      */
      editTagShape: (tagID, color, shape, url, lineEnabled) => {
        color = color || null;
        shape = shape || null;
        url = url || null;
        const action = 'editTagShape';
        const params = { tagID, color, shape, url, lineEnabled };
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      }
    }

    SDKit.validation = {
      /**
       * 二点間オブジェクト判定
       * @param {Object} positionsList 
       * @returns {Promise} 非同期処理インスタンス&nbsp;<br>
       * 正常系{<br>
       * answers:[<br>
       * &emsp; {true},{false} 対応したインデックス番号に結果を返却　物体がある場合はtrue<br>
       * ]}<br>
       * 異常系{status:"NG",ErrorCode:エラーコード}
       @example
       positionsList=new Array(new Array({x:1,y:1,z:1},{x:3,y:3,z:3}),new Array({x:1,y:1,z:1},{x:3,y:3,z:3}));

        SDKit.validation().exists3DObjectBetweenPoints(positionsList).then((result)=>
        {console.log(result)});
       */
      exists3DObjectBetweenPoints: (positionsList) => {
        const action = 'exists3DObjectBetweenPoints';
        const params = { positionsList }
        const ret = FunctionAccessor.callExternalFunction(action, params, 15 * 1000);
        return ret;
      }
    }

    //SDKitIFの準備完了を知らせるPromiseインスタンスを初回に必ず返す。
    const connect = () => {
      const action = 'connect';
      const params = null;
      const ret = FunctionAccessor.callExternalFunction(action, params, 200 * 1000);
      return ret;
    }

    const ret = connect();

    return ret;

  }

  /**
   * デバックログを出力する
   * @param {*} msg 
   */
  static debugLog(msg) {
    if (!SDKit.DEBUG) return;
    console.log(msg);
  }
}


/**
 * 関数アクセサ
 */
class FunctionAccessor {
  /**
   * 外部関数呼び出し
   * @param {Object} action アクション
   * @param {Object} params オプション引数
   * @param {Object} timeOut 待機時間(ms) SDKitIFの待機時間より長い時間であること
   * @returns {Promise} resolveの場合content
   */
  static callExternalFunction(action, params, timeOut) {
    params = params || {};
    timeOut = timeOut || null;

    const confirmId = Util.generateUuid();
    const requestId = confirmId;

    const createHandler = (resolve, reject) => {
      const handler = (event) => {
        if (event.data.result == undefined) {
          return;
        }
        const result = JSON.parse(event.data.result);
        const { status, errorCode, content, requestId } = result;

        if (confirmId !== requestId) {
          return;
        }

        window.removeEventListener("message", handler);
        if (status === "NG") {
          reject({ status, errorCode });
          return null;
        }
        if (status === "OK") {
          resolve({ status, errorCode, content });
          return null;
        }
      };
      return handler;
    };

    const promise = new Promise((resolve, reject) => {
      const handler = createHandler(resolve, reject);
      //数値か判定
      if (timeOut !== null && Number.isFinite(timeOut)) {
        setTimeout(() => {
          const status = "NG";
          const errorCode = 20002;
          reject({ status, errorCode });
          window.removeEventListener("message", handler);
        }, timeOut);
      }
      window.addEventListener("message", handler);
      params = { requestId, body: params };
      const jsonObj = JSON.stringify(params);
      SDKit.sview.contentWindow.postMessage({ action, params: jsonObj }, "*");
    });
    return promise;
  }
}

class Util {
  /**
* 一意のID生成
* @returns 一意のID　string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
*/
  static generateUuid() {
    // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
    // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
    let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
    for (let i = 0, len = chars.length; i < len; i++) {
      switch (chars[i]) {
        case "x":
          chars[i] = Math.floor(Math.random() * 16).toString(16);
          break;
        case "y":
          chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
          break;
      }
    }
    return chars.join("");
  }
}
/**
 * 二次元ベクトル
 */
class Vector2 {

  x;//x座標

  y;//y座標
}
/**
 * 三次元ベクトル
 */
class Vector3 {

  x;//x座標

  y;//y座標

  z;//z座標
}