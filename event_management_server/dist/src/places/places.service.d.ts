import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
export declare class PlacesService {
    create(createPlaceDto: CreatePlaceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlaceDto: UpdatePlaceDto): string;
    remove(id: number): string;
}
