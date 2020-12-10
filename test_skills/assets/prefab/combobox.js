/**
 * 自定义下拉菜单
 */

cc.Class({
	extends: cc.Component,

	properties: {
		comboBoxBtn: cc.Button,		// 路线下拉框
		comboBoxLabel: cc.Label,	// 下拉按钮上显示的文本
		comboBoxTriangle: cc.Node,	// 下拉按钮右边的小三角形
		dropDownNode: cc.Node,		// 下拉框
		contentNode: cc.Node,		// 滚动视图内容
		comboBoxItem: cc.Node,		// 下拉框选项
	},

	// LIFE-CYCLE CALLBACKS:

	onLoad () {
		// 路线下拉框是否已经下拉
		this.isDropDown = false;

		this.comboBoxBtn.node.on('click',this.comboBoxClicked.bind(this)); // 注册线路下拉框点击事件
	},

	/**
	 * 初始化数据
	 * @param {Object} options 参数
	 */
	initData(options) {
		// console.log(options);
		this.itemArr = options.data;
		this.node.width = options.width;
		this.comboBoxLabel.node.width = options.width * 0.6;
		this.dropDownNode.width = options.width * 0.9;
		this.comboBoxLabel.string = this.itemArr[options.value];

		this.initComboBoxItems();
	},
	/**
	 * 初始化事件
	 * @param {Object} obj 事件对象
	 */
	initEvent(obj) {
		this.GetSelectedItem = obj.GetSelectedItem;
	},
	
	// 初始化下拉框中的各个选项内容
	initComboBoxItems () {
		this.contentNode.removeAllChildren();
		let totalHeight = 0;
		this.cbItemsArr = [];
		for (let i = 0; i < this.itemArr.length; i++) {
			let cbItem = cc.instantiate(this.comboBoxItem);
			cbItem.width = this.dropDownNode.width;
			cbItem.getComponentInChildren(cc.Label).string = this.itemArr[i];
			// cbItem.children[0].children[0].getComponent(cc.Label).string = this.itemArr[i];
			this.cbItemsArr.push(cbItem);
			cbItem.on('click', this.comboBoxItemsClick.bind(this, i)); // 注册下拉框选项预制体点击事件
			this.contentNode.addChild(cbItem);
			totalHeight += cbItem.height;
		}
		
		this.dropDownNode.height = totalHeight > 600 ? 600 : totalHeight;
	
		// 设置content高度（根据所有预制的长度总和来调整content节点的长度）
		if (totalHeight > this.contentNode.height) {
			this.contentNode.height = totalHeight;
		}
	},
	// 每当玩家点击了combobox按钮后(记得要绑定该方法)，小三角形和下拉框作出相应操作
	comboBoxClicked () {
		// 旋转小三角形
		this.rotateTriangle();
		// 下拉框显示与隐藏
		this.showHideDropDownBox();
		// 改变isDropDown值
		this.isDropDown = !this.isDropDown;
	},
	// 旋转小三角图案
	rotateTriangle () {
		// 旋转小三角形(正值为逆时针，负值为顺时针)
		if (!this.isDropDown) {
			let rotateAction = cc.rotateTo(0.5, -180).easing(cc.easeCubicActionOut());
			this.comboBoxTriangle.runAction(rotateAction);
		}
		else {
			let rotateAction = cc.rotateTo(0.5, 0).easing(cc.easeCubicActionOut());
			this.comboBoxTriangle.runAction(rotateAction);
		}
	},
	// 显示与隐藏下拉框（注：要先将dropDown节点设置为不可见）
	showHideDropDownBox () {
		// 下拉框显示与隐藏
		if (!this.isDropDown) 
			this.dropDownNode.active = true;
		else 
			this.dropDownNode.active = false;
	},
	// 路线框选项点击事件
	comboBoxItemsClick(i) {
		this.cbItemsArr.forEach((item, index) => {
			if (i == index) {
				this.GetSelectedItem(i); // 获取选中项
				// 子项点击后改变下拉按钮上的文本
				this.comboBoxLabel.string = this.itemArr[i];
				// this.comboBoxLabel.string = item.children[0].children[0].getComponent(cc.Label).string;
				// 选择后改变小三角形和下拉框显示
				this.comboBoxClicked();
			}
		})
	},

});
