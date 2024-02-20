class OnlineShop{
    warehouseSpace;
    products = [];
    sales = [];

    constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace;
    }

    loadingStore(product, quantity, spaceRequired){
        if(this.warehouseSpace < spaceRequired){
            throw new Error('Not enough space in the warehouse.');
        }
        this.products.push({
            product,
            quantity
        });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity){
        const data = this.products.find(p => p.product == product);
        if(!data){
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if(minimalQuantity <= 0){
            throw new Error ('The quantity cannot be zero or negative.');
        }
        if (data.quantity >= minimalQuantity){
            return `You have enough from product ${product}.`;
        }
        else {
            const diff = minimalQuantity - data.quantity;
            data.quantity = minimalQuantity;
            return `You added ${diff} more from the ${product} products.`;
        }
    }

    sellProduct(product){
        const data = this.products.find(p => p.product == product);
        if(!data){
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        data.quantity--;
        this.sales.push({
            product,
            quantity: 1
        });
        return `The ${product} has been successfully sold.`;
    }

    revision(){
        if(this.sales.length == 0){
            throw new Error ('There are no sales today!')
        }
        const result = [
            `You sold ${this.sales.length} products today!`,
            `Products in the warehouse:`
        ];
        for (let {product, quantity} of this.products){
            result.push(`${product}-${quantity} more left`);
        }
        return result.join("\n");
    }
}